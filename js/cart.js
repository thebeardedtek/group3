
 $(document).ready(function() {
     
    function getListOfShirts() {
        var womensShirtList = [
            {
                "productType":"women", 
                "productId":200, 
                "productName":"<h2>Sauce Packet</h2> Drippin' In Retro!",
                "productNameProper":"SauceSauceSauce Tee",
                "backText":"INFI",
                "productTitle":"Infinite <b>Sauce</b>",
                "badge":"new",
                "caption":"Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/womenshirt.png",
                "background":"background: linear-gradient(135deg, rgb(237,30,191) 8%, rgb(131,35,252) 83%);",
            },
            {
                "productType":"women", 
                "productId":201, 
                "productName":"<h2>Official Szechuan Sauce</h2> Be just like the team and rock the tee!",
                "productNameProper":"Pink Exclusive Szechuan Sauce Tee",
                "backText":"SZEC",
                "productTitle":"Official Szechuan <b>Sauce</b>",
                "badge":"new",
                "caption":"Exclusive Szechuan Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/womenshirt2.png",
                "background":"background: linear-gradient(135deg, rgb(221,30,102) 8%, rgb(177,15,169) 83%);",
            },
            {
                "productType":"women", 
                "productId":202, 
                "productName":"<h2>Juice Flowin'</h2> Aint Nothing Better than Fresh Juice!",
                "productNameProper":"Juice Tee",
                "backText":"JUIC",
                "productTitle":"Juice <b>Flowin'</b>",
                "badge":"new",
                "caption":"Juice Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/womenshirt3.png",
                "background":"background: linear-gradient(135deg, rgb(241,115,41) 8%, rgb(12,197,157) 83%);",
            },
            {
                "productType":"women", 
                "productId":203, 
                "productName":"<h2>Dripping in Nothing But Sauce</h2> Time to pick up the freshest t-shirt of the year!",
                "productNameProper":"Sauce Tee",
                "backText":"NUN",
                "productTitle":"Dripping In Nothing But <b>Sauce</b>",
                "badge":"new",
                "caption":"Asian Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/womenshirt4.png",
                "background":"background: linear-gradient(135deg, rgb(35,152,90) 8%, rgb(130,184,89) 83%);",
            },
        ];

            var outputWomen = '';

            womensShirtList.forEach(function (shirt) {
                outputWomen += `
                    <div class="col-md-4" style="margin-bottom:35px;">
            <div class="card">
                <div class="card-head" style="${shirt.background}">
                <img src="img/yellowlogo.png" alt="logo" class="card-logo">
                <img src="${shirt.shirtImg}" style="width:80%; height:130%;" alt="Shirt" class="product-img">
                <div class="product-detail">
                    ${shirt.productName}
                </div>
                <span class="back-text">
                        ${shirt.backText}
                        </span>
                </div>
                <div class="card-body">
                <div class="product-desc">
                    <span class="product-title">
                            ${shirt.productTitle}
                            <span class="badge">
                            ${shirt.badge}
                            </span>
                    </span>
                    <span class="product-caption">
                            ${shirt.caption}
                        </span>
                    <span class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star grey"></i>
                        </span>
                </div>
                <div class="product-properties">
                    <span class="product-size">
                            <h4>Size</h4>
                            <ul class="ul-size">
                            <li><a href="#">S</a></li>
                            <li><a href="#" class="active">M</a></li>
                            <li><a href="#">L</a></li>
                            </ul>
                        </span>
                    <span class="product-color">
                            <h4>Colour</h4>
                            <ul class="ul-color">
                            <li><a href="#" class="orange active"></a></li>
                            <li><a href="#" class="green"></a></li>
                            <li><a href="#" class="yellow"></a></li>
                            </ul>
                        </span>
                    <div class="add-to-cart-div">
                            <button onclick="toggleAddCartClass(${shirt.productId}, '${shirt.productNameProper}', ${shirt.shipping}, ${shirt.pricing}, '${shirt.shirtImg}')" id="add-to-cart-${shirt.productId}" class="product-price btn btn-primary text-center add-to-cart-${shirt.productId}" data-product-id="${shirt.productId}">
                                Add To Cart
                            </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
                `;

                $('#other-products2-output').html(outputWomen);
            })






            var mensShirtList = [
            {
                "productType":"men", 
                "productId":100, 
                "productName":"<h2>Sauce Packet</h2> Drippin' In Retro!",
                "productNameProper":"Sauce Packet Tee",
                "backText":"RETR",
                "productTitle":"Sauce <b>Packet</b>",
                "badge":"new",
                "caption":"Retro Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/officialshirt2.png",
                "background":"background: linear-gradient(135deg, rgb(176,148,46) 8%, rgb(75,24,39) 83%);",
            },
            {
                "productType":"men", 
                "productId":101, 
                "productName":"<h2>Juice Flowin'</h2> Aint Nothing Better than Fresh Juice!",
                "productNameProper":"Juice Tee",
                "backText":"JUIC",
                "productTitle":"Juice <b>Flowin'</b>",
                "badge":"new",
                "caption":"Juice Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/officialshirt3.png",
                "background":"background: linear-gradient(135deg, rgb(137,36,172) 8%, rgb(64,106,199) 83%);",
            },
            {
                "productType":"men", 
                "productId":102, 
                "productName":"<h2>Official Szechuan Sauce</h2> Be just like the team and rock the tee!",
                "productNameProper":"Szechuan Sauce Exclusive Tee",
                "backText":"SZEC",
                "productTitle":"Official Szechuan <b>Sauce</b>",
                "badge":"new",
                "caption":"Exclusive Szechuan Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/officialshirt4.png",
                "background":"background: linear-gradient(135deg, rgb(232,105,231) 8%, rgb(10,190,196) 83%);",
            },
            {
                "productType":"men", 
                "productId":103, 
                "productName":"<h2>Official Szechuan Sauce</h2> Be just like the team and rock the tee!",
                "productNameProper":"Szechuan Sauce Exclusive Tee",
                "backText":"SZEC",
                "productTitle":"Official Szechuan <b>Sauce</b>",
                "badge":"new",
                "caption":"Exclusive Szechuan Sauce Collection",
                "pricing":24.99,
                "shipping":5,
                "shirtImg":"img/officialshirt4.png",
                "background":"background: linear-gradient(135deg, rgb(230,226,38) 8%, rgb(187,103,35) 83%);",
            },
        ];

            var output = '';

            mensShirtList.forEach(function (shirt) {
                output += `
                    <div class="col-md-4" style="margin-bottom:35px;">
            <div class="card">
                <div class="card-head" style="background: linear-gradient(135deg, rgb(137,36,172) 8%, rgb(64,106,199) 83%);">
                <img src="img/yellowlogo.png" alt="logo" class="card-logo">
                <img src="${shirt.shirtImg}" style="width:80%; height:130%;" alt="Shirt" class="product-img">
                <div class="product-detail">
                    ${shirt.productName}
                </div>
                <span class="back-text">
                        ${shirt.backText}
                        </span>
                </div>
                <div class="card-body">
                <div class="product-desc">
                    <span class="product-title">
                            ${shirt.productTitle}
                            <span class="badge">
                            ${shirt.badge}
                            </span>
                    </span>
                    <span class="product-caption">
                            ${shirt.caption}
                        </span>
                    <span class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star grey"></i>
                        </span>
                </div>
                <div class="product-properties">
                    <span class="product-size">
                            <h4>Size</h4>
                            <ul class="ul-size">
                            <li><a href="#">S</a></li>
                            <li><a href="#" class="active">M</a></li>
                            <li><a href="#">L</a></li>
                            </ul>
                        </span>
                    <span class="product-color">
                            <h4>Colour</h4>
                            <ul class="ul-color">
                            <li><a href="#" class="orange active"></a></li>
                            <li><a href="#" class="green"></a></li>
                            <li><a href="#" class="yellow"></a></li>
                            </ul>
                        </span>
                    <div class="add-to-cart-div">
                            <button onclick="toggleAddCartClass(${shirt.productId}, '${shirt.productNameProper}', ${shirt.shipping}, ${shirt.pricing}, '${shirt.shirtImg}')" id="add-to-cart-${shirt.productId}" class="product-price btn btn-primary text-center add-to-cart-${shirt.productId}" data-product-id="${shirt.productId}">
                                Add To Cart
                            </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
                `;

                $('#other-products-output').html(output);
            })
    
    }

    getListOfShirts();

    var shirtsInCart = [];


    window.toggleAddCartClass = function (id, name, shipping, price, shirtCover) {

        $('#menu-cart').css('display', 'none');

        $('#add-to-cart-' + id).toggleClass('add-to-cart-blue');

        var hasActiveClass = $('#add-to-cart-' + id).hasClass('add-to-cart-blue');
        if (hasActiveClass) {
            console.log('hasActiveClass');
            let shirt = {};
            shirt.productId = Number(id);
            shirt.name = name;
            shirt.shipping = shipping;
            shirt.price = price;
            shirt.shirtCover = shirtCover;
            shirtsInCart.push(shirt);
        } else {

            for (let x of shirtsInCart) {
                if (x.productId === id) {
                    let shirtToRemove = shirtsInCart.indexOf(x);
                    shirtsInCart.splice(shirtToRemove, 1);
                }
            }

        }

        event.preventDefault();
        event.stopPropagation();
        console.log('shirtsInCart', shirtsInCart);
    }

    window.removeFromCart = function (id) {

        for (let x of shirtsInCart) {
            if (x.productId === id) {
                let shirtToRemove = shirtsInCart.indexOf(x);
                shirtsInCart.splice(shirtToRemove, 1);
            }
        }

        $('#add-to-cart-' + id).removeClass('add-to-cart-blue');

        getCartDetails();
        getCartTotals();

    }

    function getCartDetails() {
        if (shirtsInCart && shirtsInCart.length > 0) {
            var cartOutput = '';

            shirtsInCart.forEach(function (shirtInCart) {

                cartOutput += `
                    <div class="cart-img">
                        <picture>
                            <img src="${shirtInCart.shirtCover}">
                        </picture>
                        <div class="cart-details">
                            <div class="cart-excerpt truncate">${shirtInCart.name}</div>
                            <div class="cart-actions">
                                <span class="cart-quantity">Quantity 1</span>
                                <span class="cart-price">$${shirtInCart.price}</span>
                                <button onclick="removeFromCart(${shirtInCart.productId})" class="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>
                    `

                $('#cart-output').html(cartOutput);
            })

        } else {
            var noDetails = `
                <div class="no-items">You Have No Items In Cart</div>
            `
            $('#cart-output').html(noDetails);
        }
    }

    function getCartTotals() {
        var prices = [];
        var totalCartPrice = null;

        shirtsInCart.forEach(function (shirtPrice) {
            totalCartPrice += Number(shirtPrice.price);
        });

        var totalCartQuantity = shirtsInCart.length;

        if (totalCartPrice && totalCartPrice !== null) {
            $('#cart-total-price').html('Total $' + totalCartPrice);
            $('#cart-total-quantity').html('You Have ' + totalCartQuantity + ' Item(s) In Your Cart');
        } else {
            $('#cart-total-price').html('Total $0');
            $('#cart-total-quantity').html('You Have 0 Item(s) In Your Cart');
        }


    }

    window.toggleShowCart = function (){
        $('#menu-cart').toggle().toggleClass('animated slideInDown');

        getCartDetails();
        getCartTotals();

        event.preventDefault();
        event.stopPropagation();
    }

});