(function(jQuery){
  function _default(e, target){e.preventDefault();};

  var _option = {
    disabled : false,
dragenter : _default,
dragover : _default,
drop : _default,
dragleave : _default,
dragEnterClass : ""
  };

  jQuery.fn.fileDroppable = function(options){
    var options = jQuery.extend(_option, options);
    return this.each(function(){
      $(this).on({
        dragenter : _dragenter,
        dragover : _dragover,
        drop : _drop,
        dragleave : _dragleave,
      }, {target : this});
    });
  };
  jQuery.fn.fileDroppable.option = function(key, value){
    var l = arguments.length;
    if(l == 1){
      return _option[key];
    }else if(l == 2){
      _option[key] = value;
      return $(this);
    }else{
      return _option;
    }
  };
  function _dragenter(e){
    if(!_option.disabled){
      $(e.data.target).addClass(_option.dragEnterClass);
    }
    _do(_option.dragenter, e, e.data.target);
  }
  function _dragover(e){
    _do(_option.dragover, e);
  }
  function _drop(e){
    if(!_option.disabled){
      $(e.data.target).removeClass(_option.dragEnterClass);
    }
    _do(_option.drop, e);
  }
  function _dragleave(e){
    if(!_option.disabled){
      $(e.data.target).removeClass(_option.dragEnterClass);
    }
    _do(_option.dragleave, e);
  }
  function _do(func, e){
    if(!_option.disabled && typeof(func) === 'function'){
      return func(e, e.data.target);
    }
  }
})(jQuery);
