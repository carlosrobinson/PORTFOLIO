// Get User info
document.user.addEventListener("submit", function(e){
    e.preventDefault();
    var username = document.user.userName.value
    var userAddress = document.user.address.value
    var userPhoneNumber = document.user.phoneNumber.value
    alert(
            "Full Name: " + username + "\n"+ 
            "Address: " + userAddress + "\n" + 
            "Phone Number: " + userPhoneNumber
        );
})

// this funtion populates or clears the billing input fields
function fillBilling(f){
    if(f.sameAsBilling.checked  == true ){
        f.billingAddress.value = f.address.value;
        f.billingPhoneNumber.value = f.phoneNumber.value;
    }else{
        f.billingAddress.value = "";
        f.billingPhoneNumber.value = "";
    }
}

// console.log(form, userName, address, phoneNumber, submit);