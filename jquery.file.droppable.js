(function(jQuery){
  function _default(e, target){e.preventDefault();};

  var _option = {
    disabled : false,
dragenter : _default,
dragover : _default,
drop : _default,
dragleave : _default,
dragEnterClass : null
  };

  jQuery.fn.fileDroppable = function(options){
    var options = jQuery.extend(
      {
        disabled : _option.disabled,
        dragenter : _option.dragenter,
        dragover : _option.dragover,
        drop : _option.drop,
        dragleave : _option.dragleave,
        dragEnterClass: _option.dragEnterClass
      }, options);
    _option.dragEnterClass = options.dragEnterClass;
    _option.dragenter = options.dragenter;
    _option.dragover = options.dragover;
    _option.drop = options.drop;
    _option.dragleave = options.dragleave;
    this.each(function(){
      $(this).on({
        dragenter : _dragenter,
        dragover : _dragover,
        drop : _drop,
        dragleave : _dragleave,
      }, {target : this});
    });
  };
  jQuery.fn.fileDroppable.option = function(key, value){
    if(key){
      if(value != null && typeof(value) !== 'undefined'){
        _option[key] = value;
        return _option[key];
      }else{
        return _option[key];
      }
    }else{
      return _option;
    }
  };
  function _dragenter(e){
    if(!_option.disabled && _option.dragEnterClass){
      $(e.data.target).addClass(_option.dragEnterClass);
    }
    _do(_option.dragenter, e, e.data.target);
  }
  function _dragover(e){
    _do(_option.dragover, e);
  }
  function _drop(e){
    if(!_option.disabled && _option.dragEnterClass){
      $(e.data.target).removeClass(_option.dragEnterClass);
    }
    _do(_option.drop, e);
  }
  function _dragleave(e){
    if(!_option.disabled && _option.dragEnterClass){
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
