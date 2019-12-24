from flask import request
from functools import wraps

def typecheck(*args,**kwargs):
  name = kwargs["name"]
  type = kwargs["type"]
  def inner(func):
      @wraps(func)
      def check(obj = {"index":0,"error_val":-1},*a,**k):
        if obj["error_val"] == -1:
            if request.json is None:
              obj["error_val"] = 0
            else:
                data = request.json
                if data.get(name) is None:
                    obj["error_val"] = 1
                    obj["error_name"] = name
                elif not isinstance(data[name],type):
                    obj["error_val"] = 2
                    obj["error_name"] = name
        obj["index"] = obj["index"] + 1
        return func(*a,**k, obj = obj)
      return check
  return inner

def typefail(d):
  def inner(f):
      @wraps(f)
      def inside(obj={},*a,**k):
          if(obj["error_val"] > -1):
            obj_c = obj.copy()
            obj["index"] = 0
            obj["error_val"] = -1
            return d(obj_c)
          return f(*a,**k)
      return inside
  return inner