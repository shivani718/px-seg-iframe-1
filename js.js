  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="javWjpX2qUqY94GDjEB4FSXB8Y1gd6RK";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("javWjpX2qUqY94GDjEB4FSXB8Y1gd6RK");
  analytics.page();
  }}();

function login()
    {
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
      const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
      if(username!=""){
        if(username=="shivani.reddy00@gmail.com" || username=="scheemala@gainsight.com" || username=="demouser99@gmail.com" && password=="admin")
        {
          b = username.substr(8, 6);
            var id = b;
        if(username=="shivani.reddy00@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
    "college_id" : "1209A" ,
    "inProductPromotions" : 1,
    "versionA" : 21,
    "BooleanAttribute" : 0
  },
  {
  //Account Fields
    "id": myaccount.a4, //Required
    "name": myaccount.a4,
    "GPremiumlarge": 1,
    "config" : 0,
    "meta" : 1
 });
        }else if(username=="scheemala@gainsight.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
   "college_id" : "1209A" ,
   "inProductPromotions" : 1 ,
   "versionA" : 20,
   "BooleanAttribute" : "false"
  },
  {
  //Account Fields
    "id": myaccount.a3, //Required
    "name": myaccount.a3,
    "GPremiumlarge": 0,
    "GPremiumsmall": " ",
    "config" : "false",
    "meta" : "True"
 });
        }
          else if(username=="demouser99@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
    "college_id" : "1209A" ,
    "inProductPromotions" : 1 ,
    "versionA" : 20,
    "BooleanAttribute" : 0
  },
  {
  //Account Fields
    "id": myaccount.a2, //Required
    "name": myaccount.a2,
    "GPremiumlarge": 0,
    "GPremiumsmall": 1,
    "config" : 0,
    "meta" : 1
 });
      }
          
        // location.href ="home.html";
        else
        {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username,
                            "college_id" : "1209A" ,
                            "inProductPromotions" : 1 ,
                            "versionA" : 20,
                            "BooleanAttribute" : 0
                      
                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a1, //Required
                            "name": myaccount.a1,
                            "GPremiumlarge": 1,
                            "GPremiummedium": 1,
                            "GPremiumsmall": 0
                            // flat custom attributes
                        });
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
            window.location = "https://shivani718.github.io/px/home.html";
      
            return false;
 }
      }
    }
        
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

var Productname = "T.V";
var Productbrand = "Panasonic";
var Productprice = 90000;
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {
    detail: {
        itemName: this.Productname,
        itemBrand: this.Productbrand
    }
})
let transactionsuccess = new CustomEvent('transactionsuccess', {
    detail: {
        Amountdeducted: this.Productprice,
        Paymentstatus: this.transactionStatus
    }
})
document.addEventListener('DOMContentLoaded', function () {
    let m = document.getElementById('paymentbtn');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Make Payment";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Your Transaction is being Proccessed.....";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 2000);


}
function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {
        itemName: ev.detail.itemName,
        itemBrand: ev.detail.itemBrand
    });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', {
        Amountdeducted: ev1.detail.Amountdeducted,
        Paymentstatus: ev1.detail.Paymentstatus
    });
}
