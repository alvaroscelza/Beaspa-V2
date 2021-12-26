let allergiesDescriptionPlaceHolderText;

$(document).on('change', 'input[id="allergies"]', function () {
    if ($("#allergies").prop('checked') == true) {
        allergiesDescriptionPlaceHolderText = $("#allergiesDescription").attr('placeholder');
        $("#allergiesDescription").removeAttr('disabled');
        $("#allergiesDescription").removeAttr('placeholder');
    }
    else {
        $("#allergiesDescription").attr('disabled', true);
        $("#allergiesDescription").attr('placeholder', allergiesDescriptionPlaceHolderText);
    }
});