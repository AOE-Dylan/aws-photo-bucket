let generateImg = image => {
    $("#data").append($(`<img class="image" src="${image}"/>`));
}

const imgs = (responseData) => {
  responseData.message.Contents.map(currVal => generateImg(`https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${currVal.Key}`))
};

$('#getData').click(function(){
    $.ajax({
        url: "https://nq2x144zp1.execute-api.us-west-2.amazonaws.com/dev/users/photos",
        type: 'GET',
        success: data => {
            data.message.Contents.map(currVal => generateImg(`https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${currVal.Key}`));
        },
        'Content-Type': 'application/json'
    })
});