$(document).ready(function () {
    var data =
        [
            { "foodName": "Apple", "pic": "img/demboyz.png", "shipping": "1", "price": "4", "category": "fruit" },
            { "foodName": "Orange", "pic": "img/demboyz.png", "shipping": "2", "price": "5", "category": "fruit" },
            { "foodName": "Kiwi", "pic": "img/demboyz.png", "shipping": "3", "price": "7", "category": "fruit" },
            { "foodName": "Something", "pic": "img/demboyz.png", "shipping": "3", "price": "7", "category": "fruit" }
        ]

    var output = '';

    data.forEach(function (littleData) {
       output += `
        <div class="col col-lg-3">
            <div class="category">${littleData.category}</div>
            <div class="name">${littleData.foodName}</div>
            <div class="pic"><img src="${littleData.pic}"></div>
            <div class="shipping">${littleData.shipping}</div>
            <div class="price">${littleData.price}</div>
        </div> 
        `;    
});




    $('#output').html(output);

    console.log(data);


}); //DO NOT DELETE