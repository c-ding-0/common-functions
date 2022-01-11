(function( $ ){
    var commentEditor = $('textarea').markItUp(mySettings);
    //commentEditor.closest('.markItUpContainer').append('<label class=""></label><div class="markItUpPreview"><span class="placeholder">Preview Area</span></div>');
    $(document).ready(function() {
        $('.respond a').click(function () {
            var respondTo=$(this).closest('.respond').attr('class').match(/respond-to-(\S*)/)[1];
            if(respondTo) {
                commentEditor.val('@' + respondTo + ' ' + commentEditor.val());
            }
        });
    });

    $(document).ready(function(){
    var form=$('#commentform');
    form.on("submit",function(){
        $('<input type="hidden" name="citations"/>').appendTo('#commentform .form-submit').val(markIt.cite.format('bibtex'));
    });

    });

})(jQuery);

jQuery(document).ready(function($){
    $('.comment-menus .edit a').click(function() {
        var commentID = $(this).getCommentID();
        $.ajax({
            url: ajaxurl,
            data: {ID: commentID, action: 'ajax_edit_comment'},
            type: 'post',
            dataType: "json",
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            },
            success: function (res) {
                if (res.message == 'Error!') {
                    alert(res.message);
                } else {
                    
                    location.reload();
                }
            }
        });
        return false;
    });
});