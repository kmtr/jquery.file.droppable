(function(jQuery){
  function _default(e, target){e.preventDefault();};

  jQuery.fn.fileDroppable = function(options){
    var options = jQuery.extend(
      {
        disabled : false,
        dragenter : _default,
        dragover : _default,
        drop : _default,
        dragleave : _default,
        dragEnterClass: null
      }, options);
    this.each(function(){
      $(this).prop('options', options);
      $(this).on({
        dragenter : options.dragenter,
        dragover : options.dragover,
        drop : options.drop,
        dragleave : options.dragleave,
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
