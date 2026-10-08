var invalidbusinessname = ['Office work', 'student', 'Student', 'students', 'Students', 'STUDENTS', 'STUDENT', 'Nothing', 'nothing', 'Job', 'JOB', 'job', 'housewife', 'Housewife', 'House wife', 'House Wife', 'house wife', 'Personal', 'personal', 'Majduri', 'majduri', 'kisan', 'Kisan', 'Driver', 'driver', 'Work From Home', 'Kishan', 'kishan', 'farmer', 'Farmer', 'House waif', 'Sarvice', 'sarvice', 'Work form home', 'no', 'NO', 'wfh', 'WFH', 'Study', 'study', 'writing', 'Writing', 'Service', 'service', 'School', 'school', 'civil work', 'Civil work', 'Survice', 'survice', 'Test', 'test', 'TEST', 'testing', 'Testing', 'Online', 'online', 'teaching', 'Teaching', 'Transport', 'transport', 'MARKETING', 'marketing', 'Marketing', 'Berojgar', 'berojgar', 'Sex', 'sex', 'Sexxy', 'Jio company', 'jio company', 'jio', 'JIO', 'I am studying', 'Carrer', 'career', 'Career', 'Farmar', 'pHqghUme', 'Employee', 'Work from home', 'Work', 'work', 'WORK', 'No', 'no', 'NO', 'Rent', 'rent', 'RENT', 'Plambar', 'plumber', 'PLUMBER', 'Plumber', 'Editing', 'editing', 'EDITING'];

// Back to Top
var backtotop = $('.back-to-top');

$(window).scroll(function () {
  backtotop.toggleClass('active', $(this).scrollTop() > 300);
});

backtotop.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Preloader
$(window).on("load", function () {
  jQuery("#preloader").fadeOut("slow", function () {
    jQuery(this).remove()
  })
});

// Smooth Scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 500);
});

// Homepage Link
var host = window.location.host;
var BASE_URL = host === "localhost" ? "http://localhost/vasy/" : "https://" + host + "/";
// var ref_url = host === "localhost" ? "http://localhost/vasy/" : "http://192.168.149.48:8080/";


//debugger
let referrerUrl = sessionStorage.getItem('refrerurl');
const submitUrl = window.location.href;

if (referrerUrl === null || referrerUrl === '') {
  // If no referrer URL, use submitUrl (current page) as referrer
  referrerUrl = submitUrl;
  sessionStorage.setItem('refrerurl', referrerUrl);
}

// Store the submit URL
sessionStorage.setItem('submitUrl', submitUrl);
console.log('SubmitURL ---> ', submitUrl)
console.log('RefrerURL ---> ', referrerUrl)

// Megamenu
$("#submenulist li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(this).find(".nav-macro-name").addClass("active");
});

// Auto popup
if (($.cookie("popup_1_2") == "3")) {
  //console.log('popup');
} else {
  setTimeout(function () {
    console.log("Timer finished. Checking conditions...");

    // Check if a field is blocking it
    if ($('#erp-phone1').val() || $('#c-name').val()) {
      console.log("Popup blocked because a form field has a value.");
      return;
    }

    if (openpageflag != 1 && !$('.modal').is(':visible')) {
      console.log("Showing Standard Modal");
      $('#scheduleademo').modal('show');
    }
    else if (openenterpriseflag != 1 && !$('.enterprise-modal').is(':visible')) {
      console.log("Showing Enterprise Modal");
      $('#scheduleademo-enterprise').modal('show');
    }

    $.cookie("popup_1_2", "3");
  }, 45000);

  // setTimeout(function () {
  //   if (!($('#c-name, #company-name, #c_phone, #otp , #c_city').is(':focus') || ($('#erp-c-name1').val()) || ($('#erp-company-name1').val()) || ($('#erp-phone1').val()) || ($('#erp-email1').val()) || ($('#erp-c_city1').val()) || ($('#c-name').val()) || ($('#company-name').val()) || ($('#c_phone').val()) || ($('#otp').val()) || ($('#c_city').val()))) {

  //     if (openpageflag != 1 && !$('.modal').is(':visible')) {
  //       $('#scheduleademo').modal('show');
  //     }
  //     else if (openenterpriseflag != 1 && !$('.enterprise-modal').is(':visible')) {
  //       $('#scheduleademo-enterprise').modal('show');
  //     }
  //     else if (openpartnerflag === 1) {
  //       $('#becomeapartner').modal('show');
  //     } else if (openpartnerflag === 1 && !$('.partner-modal').is(':visible')) {
  //       $('#becomeapartner').modal('show');
  //     }
  //     $.cookie("popup_1_2", "3");
  //   }
  // }, 45000);
}

// Thank You Page
$('.lang-tab li a#hindi-tab').on('click', function () {
  $('#player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

$('.lang-tab li a#english-tab').on('click', function () {
  $('#player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

var LIVE_URL = "index.html";
// var LIVE_URL = "https://global.vasy.ai/";

// Assuming your "Schedule a Demo" button has the ID 'reqdemosubmit1'
var $submitBtn1 = $('#reqdemosubmit1');

$('#c_phone').on('input paste', function () {
  // Add a delay to wait for the input to be updated after paste
  if ($("#c_phone").val().length === 10) {
    // setTimeout(function () {
    //   checkmobile('c_phone');
    // }, 100);
    setTimeout(function () {
      const phone = $('#c_phone').val();
      if (phone.length === 10) {
        checkmobile('c_phone');
      }
    }, 100);
  }
});

$(document).ready(function () {
  $("#w-phone").on("input", function () {
    checkmobile("w-phone");
  });
});


// Enable OTP & Submit Buttons
function enableButtons() {
  $('#sendotp-btn, ' + $submitBtn1.selector).prop('disabled', false);
}
// Disable OTP & Submit Buttons
function disableButtons() {
  $('#sendotp-btn, ' + $submitBtn1.selector).prop('disabled', true);
}


function checkmobile(id) {
  if (BASE_URL == LIVE_URL) {
    var hasError = false;

    $.ajax({
      type: "GET",
      url: BASE_URL + "checkmobile.php?mobileNo=" + $("#" + id).val(),
      cache: false,
      success: function (result) {
        if (result.trim() == 1) {
          enableButtons();
          $("#partners-btn").prop('disabled', false);
          $("#contact-button").prop('disabled', false);
          $("#eventexposubmit").prop('disabled', false);
          $("#getstarted").prop('disabled', false);
        } else {
          disableButtons();
          $("#partners-btn").prop('disabled', true);
          $("#contact-button").prop('disabled', true);
          $("#eventexposubmit").prop('disabled', true);
          $("#getstarted").prop('disabled', true);
          toastr.error("Relax! We've got your lead.");
          hasError = true;
        }
      },
      error: function () {
        toastr.error('An error occurred while checking the mobile number');
        hasError = true;
        logLeadError('Mobile Verification Check Failed', {
          step: 'checkmobile_ajax_error',
          inputFieldId: id,
          inputValue: $("#" + id).val(),
          status: arguments[1] || 'error',
          error: arguments[2] || 'Unknown AJAX Error'
        });
      },
      async: false
    });
    return hasError;
  }
  else {
    console.log("Testing Server");
  }
}

var otpcount = 0;
var editOtpButton = $('#editphone-btn');
function sendotp() {
  $("#sendotp-btn").prop('disabled', true);
  var number = $("#c_phone").val();
  var numbertel = $("#contact-form .iti__selected-dial-code").text();
  let resulttel = numbertel.substr(1);
  if (number != null && number.length == 10) {
    var input = {
      "phone": number,
      "numtel": resulttel,
      "action": "send_otp"
    };
    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      data: input,
      cache: false,
      success: function (response) {
        if (response == "success") {
          toastr.success('OTP Sent Successfully!');
          console.log(response);
          $("#c_phone").prop('disabled', true);
          $('#click-show').removeClass('d-none');
          $('#sendotp-btn').addClass('d-none');
          editOtpButton.removeClass('d-none');
          otpcount += 1;
          if (otpcount >= 3) {
            editOtpButton.prop("disabled", true);
            toastr.error('You can edit phone number 3 times only');
          }
          if (otpcount >= 3) {
            $("#sendotp-btn, #sendotp-btn1, #sendotp-btn2").prop("disabled", "true");
          }

        } else {
          console.log("error");
        }
      },
      error: function () {
        // Handle AJAX error (optional)
        toastr.error('An error occurred while sending OTP');
      }
    });
  } else {
    console.log("Please enter a valid number!");
    toastr.error('Please enter a valid number!');
    $("#sendotp-btn").prop('disabled', false);
  }
}

function editphone() {
  $("#sendotp-btn").prop('disabled', false);
  $("#c_phone").prop('disabled', false);
  $('#otp').val("");
  $('#otp').prop("disabled", false);
  $('#verifyotp-btn').val('Verify');
  $('#verifyotp-btn').prop("disabled", false);
  $('#click-show').addClass('d-none');
  $('#editphone-btn').addClass('d-none');
  $('#sendotp-btn').removeClass('d-none');
}

function verifyotp() {
  var otp = $("#otp").val();

  var input = {
    "otp": otp,
    "action": "verify_otp"
  };

  if (otp != null && otp.length == 6) {
    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      dataType: "json",
      data: input,
      cache: false,
      success: function (response) {
        $("." + response.type).html(response.message)
        $("." + response.type).show();
        if (response.type == "success") {
          toastr.success('OTP Verified Successfully!');
          $('#verifyotp-btn').val('Verified');
          $('#verifyotp-btn').prop("disabled", true);
          $("#otp").prop('disabled', true);
          $('#editphone-btn').attr("disabled");
          otpverified = 1;

        } else if (response.type == "error") {
          toastr.error('Invalid OTP');
        } else {
          toastr.error('Something Went Wrong');
        }
      },
      error: function () {
        console.log("OTP Verification Failed!");
      }
    });
  } else {
    console.log("Please Enter OTP");
    toastr.error('Please Enter OTP');
  }
}

autoverifyotp = (e) => ($(e).val().length == 6) ? verifyotp() : '';

$("#acceptrules").on('change', function () {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }
});



$("#careerbtn").click(function () {
  var careerName = $('#empname').val();
  var careerEmail = $('#empemail').val();
  var careerMobile = $('#career_phone').val();
  var careerJobLevel = $('#joblevel').val();
  var careerJobTitle = $('#jobtitle').val();
  var careerSalary = $('#salarycomp').val();
  var careerSummary = $('#empsummary').val();
  var careerAttachment = $('#uploadImage').val();
  const fileInput = document.getElementById('uploadImage');
  const file = fileInput.files[0];
  const maxSize = 3 * 1024 * 1024; // 3MB in bytes

  if (careerName.trim() == '' || careerEmail.trim() == '' || careerMobile.trim() == '' || careerJobLevel.trim() == '' || careerJobTitle.trim() == '' || careerSalary.trim() == '' || careerSummary.trim() == '' || careerAttachment.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    // $("#reqdemosubmit1").prop('disabled', false);
    return false;
  } else if ($("#career_phone").val().length !== 10) {
    toastr.error('Mobile no. should be 10 digit');
    // $("#reqdemosubmit1").prop('disabled', false);
    return false;
  } else if (file.size > maxSize) {
    toastr.error('File size exceeds 3MB. Please choose a smaller file.');
    fileInput.value = ''; // Clear the input
    return false;
  }
  else {
    toastr.success('Message Sending');
  }

});

function isValidEmail(email) {
  var regex = /^(?!\.)(?!.*\.\.)[^\s@]+@[^\s@]+(\.[^\s@]{2,})+(?<!\.)$/;
  return regex.test(email);
}

// Modal Form
$("#reqdemosubmit1").click(function () {

  const submitButton = this;
  // IMPORTANT: Client-side rate limiting helper function.
  if (typeof checkAndSetRateLimitForm1 === 'function' && !checkAndSetRateLimitForm1()) {
    return false;
  }

  $("#reqdemosubmit1").prop('disabled', true);
  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name2 = $("#c-name").val();
  var companyname2 = $("#company-name").val();
  var cleanedCompanyName2 = companyname2.trim();
  var email2 = $("#c_email").length ? $("#c_email").val() : "";
  var country2 = $(".new-form .iti__selected-dial-code").text();
  var contact2 = $("#c_phone").val();
  var city2 = $("#c_city").val();
  var remarks2 = $("#c_remarks").val();
  var plantype = '';
  var acceptrules = $("#acceptrules").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;
  var visitorurl = sessionStorage.getItem('refrerurl');

  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);
  console.log('New SubmitURL ---> ', submitUrl);
  console.log("Country >>", country2);

  // Data Layer Hashing (Ensuring privacy for PII in analytics)
  async function hashPhoneNumber(countryCode, phoneNumber) {
    const originalPhoneNumber = `${countryCode}${phoneNumber}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  const cCode = country2;
  const cMnumber = contact2;
  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });
      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => {
      console.error('Hashing Error:', error);

      logLeadError('Phone Hash Conversion Failed', {
        inputFieldId: submitButton.id,
        step: 'hash_phone_number',
        countryCode: cCode,
        contactNumber: cMnumber,
        error: error.message || String(error)
      });
    });

  console.log("encodeURIComponent(submitUrl)", encodeURIComponent(submitUrl))

  // Email validation for specific pages (Original logic)
  if (window.location.href.includes("festive-crm-webinar")) {
    if ($("#c_email").length) {
      if (email2 === "" || !isValidEmail(email2) || email2.length > 60) {
        toastr.error('Please enter a valid email address (max 60 chars)');
        if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
        $("#reqdemosubmit1").prop('disabled', false);
        return false;
      }
    }
  }

  // Define reCAPTCHA action type
  var actionType = 'schedule_demo';

  // Base data string
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&country=' + country2 + '&contact=' + contact2 + '&email=' + email2 + '&city=' + city2 + '&remarks=' + encodeURIComponent(remarks2) + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&actionType=' + actionType;

  console.log(dataString);

  $('#name2, #companyname2, #contact2, #city2, #c_phone , #c_email').on('keyup', function () {
    // Check if all required fields are filled
    if ($('#name2').val().trim() !== '' &&
      $('#companyname2').val().trim() !== '' &&
      $('#contact2').val().trim() !== '' &&
      $('#c_email').val().trim() !== '' &&
      $('#city2').val().trim() !== '' &&
      $('#c_phone').val().length === 10) {

      // Enable the submit button
      $("#reqdemosubmit1").prop('disabled', false);
    } else {
      // If any required field is empty, disable the submit button
      $("#reqdemosubmit1").prop('disabled', true);
    }
  });

  // --- Scenario 1: Handling incomplete fields (Sends data to DB but fails validation) ---
  if (companyname2.trim() == '' || city2.trim() == '') {
    // Prepare data for incomplete submission (allows null/empty fields)
    dataString = 'name=' + (name2 || " ") + '&companyname=' + (companyname2 || " ") + '&country=' + (country2 || " ") + '&contact=' + (contact2 || null) + '&email=' + (email2 || "") + '&city=' + (city2 || " ") + '&remarks=' + encodeURIComponent(remarks2 || "") + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&actionType=' + actionType;

    if (name2 != '' || companyname2 != '' || contact2 != '') {

      // --- RECAPTCHA V3 FOR INCOMPLETE FORM ---
      grecaptcha.ready(function () {
        grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

          var recaptcha_response = token;
          var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

          try {
            $.ajax({
              type: "POST",
              url: BASE_URL + "schedule-your-demo-database.php",
              data: dataStringWithToken,
              cache: false,
              dataType: "json",
              success: function (result) {
                // Handles rate-limit if server returns 200 but sends rate-limit message
                if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
                  const timeRemaining = result.message.split('|')[1];
                  toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
                }
                // --- DUPLICATE CHECK BLOCK ---
                else if (result.message === "Relax! We've got your lead.") {
                  toastr.error(result.message);
                  $("#reqdemosubmit1").prop('disabled', true);
                } else {
                  toastr.error('Attention! Incomplete Form Detected');

                  logLeadError('Incomplete Lead Submission Returned Unexpected Response', {
                    inputFieldId: submitButton.id,
                    step: 'schedule_your_demo_database_response_error',
                    responseMessage: result.message || 'Unknown response',
                    leadContact: country2 + contact2
                  });
                }

                $("#reqdemosubmit1").prop('disabled', false);
                if (typeof decrementAttemptForm1 === 'function' && result.message !== 'success') { decrementAttemptForm1(); }
              },
              error: function (xhr, status, error) {

                // Rate Limit
                if (xhr.status === 429) {
                  try {
                    const result = JSON.parse(xhr.responseText);
                    const timeRemaining = result.message.split('|')[1];

                    toastr.error(
                      'Submission limit exceeded. Please wait ' +
                      timeRemaining +
                      ' seconds before trying again.'
                    );
                  } catch (e) {
                    toastr.error('Submission rate limit exceeded (429 Error).');
                  }
                } else {
                  toastr.error('Network error during incomplete form submission.');
                }

                // Log AJAX failure
                logLeadError('AJAX Request Failed During Incomplete Lead Submission', {
                  inputFieldId: submitButton.id,
                  step: 'schedule_your_demo_database_ajax_error',
                  status: status,
                  httpStatus: xhr.status,
                  error: error,
                  responseText: xhr.responseText
                    ? xhr.responseText.substring(0, 300)
                    : '',
                  leadContact: country2 + contact2
                });

                // Decrement attempt unless it was a definitive 429 block
                if (
                  typeof decrementAttemptForm1 === 'function' &&
                  xhr.status !== 429
                ) {
                  decrementAttemptForm1();
                }

                $("#reqdemosubmit1").prop('disabled', false);
              }
            });
          } catch (error) {
            console.error('AJAX execution failed:', error);

            logLeadError('JS Runtime Exception During Incomplete Submission', {
              inputFieldId: submitButton.id,
              step: 'incomplete_ajax_try_catch',
              error: error.message || String(error)
            });

            if (typeof decrementAttemptForm1 === 'function') {
              decrementAttemptForm1();
            }

            $("#reqdemosubmit1").prop('disabled', false);
          }
        }).catch(function (error) {
          console.error("reCAPTCHA execution failed:", error);

          logLeadError('reCAPTCHA v3 Execution Failed', {
            inputFieldId: submitButton.id,
            step: 'incomplete_recaptcha_execution',
            error: error.message || String(error)
          });

          if (typeof decrementAttemptForm1 === 'function') {
            decrementAttemptForm1();
          }

          toastr.error('Security verification failed. Please try again.');
          $("#reqdemosubmit1").prop('disabled', false);
        });
      });
    } else {
      toastr.error('Attention! Incomplete Form Detected');
      $("#reqdemosubmit1").prop('disabled', false);
    }
  }

  // --- Scenario 2: Full Validation Checks ---
  else if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#reqdemosubmit1").prop('disabled', false);
    return false;
  }
  else if (name2.length > 60 || companyname2.length > 60 || city2.length > 60) {
    toastr.error("You've entered too many characters");
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#reqdemosubmit1").prop('disabled', false);
    return false;
  }
  else if (typeof iti !== 'undefined' && !iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#reqdemosubmit1").prop('disabled', false);
    return false;
  }
  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(cleanedCompanyName2)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#reqdemosubmit1").prop('disabled', false);
    return false;
  }

  // --- Scenario 3: Passed Validation (Full Submission) ---
  else {
    toastr.info('Message Sending...');

    // --- RECAPTCHA V3 FOR COMPLETE FORM ---
    grecaptcha.ready(function () {
      grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

        var recaptcha_response = token;
        var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

        try {
          $.ajax({
            type: "POST",
            url: BASE_URL + "schedule-your-demo-latest.php",
            data: dataStringWithToken,
            cache: false,
            dataType: "json",
            success: function (result) {
              console.log(result);

              // 1. Handles rate-limit if server returns 200 but sends rate-limit message
              if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
                const timeRemaining = result.message.split('|')[1];
                toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again. (Code: RLA)');
                $("#reqdemosubmit1").prop('disabled', false);
              }
              // --- DUPLICATE CHECK BLOCK ---
              else if (result.message === "Relax! We've got your lead.") {
                toastr.error(result.message);
                $("#reqdemosubmit1").prop('disabled', true);
              } else if (result.message == 'success') {
                console.log("result:", result)
                $('#contact-form')[0].reset();
                toastr.success('Message Sent Successfully!!');
                // Redirect logic
                if (window.location.href.includes("partner/")) {
                  window.location = BASE_URL + `partner-thank-you?mob=${country2}${contact2}`;
                } else if (window.location.href.includes("festive-crm-webinar") || window.location.href.includes("webinar/ai-in-business")) {
                  window.location = BASE_URL + `thank-you-for-registration-in-webinar?mob=${country2}${contact2}`;
                } else {
                  window.location = BASE_URL + `thanks-home?mob=${country2}${contact2}`;
                }
              } else {
                toastr.error(
                  'Oops! Something Went Wrong: ' +
                  (result.message || 'Unknown server error.')
                );

                $("#reqdemosubmit1").prop('disabled', false);

                logLeadError('Lead Endpoint Returned Server Error', {
                  inputFieldId: submitButton.id,
                  step: 'schedule_your_demo_response_error',
                  responseMessage: result.message || 'Unknown server error',
                  leadContact: country2 + contact2
                });

                if (typeof decrementAttemptForm1 === 'function') {
                  decrementAttemptForm1();
                }
              }
            },
            error: function (xhr, status, error) {

              if (xhr.status === 429) {

                try {
                  const result = JSON.parse(xhr.responseText);

                  if (
                    result.message &&
                    result.message.startsWith('error: rate-limit-exceeded|')
                  ) {
                    const timeRemaining = result.message.split('|')[1];

                    toastr.error(
                      'Submission limit exceeded. Please wait ' +
                      timeRemaining +
                      ' seconds before trying again. (Code: RLB)'
                    );
                  } else {
                    toastr.error('Submission rate limit exceeded (429 Error).');
                  }

                } catch (e) {
                  toastr.error(
                    'Submission rate limit exceeded (429 Error) but could not parse server response.'
                  );
                }

              } else {
                toastr.error(
                  'Network error during form submission (' +
                  xhr.status +
                  ').'
                );
              }

              // Log AJAX / HTTP / parser failure
              logLeadError('AJAX Request Failed During Lead Submission', {
                inputFieldId: submitButton.id,
                step: 'schedule_your_demo_ajax_error',
                status: status,
                httpStatus: xhr.status,
                error: error,
                responseText: xhr.responseText
                  ? xhr.responseText.substring(0, 300)
                  : '',
                leadContact: country2 + contact2
              });

              if (
                typeof decrementAttemptForm1 === 'function' &&
                xhr.status !== 429
              ) {
                decrementAttemptForm1();
              }

              $("#reqdemosubmit1").prop('disabled', false);
            }
          });
        } catch (error) {
          console.error('AJAX execution failed:', error);

          logLeadError('JS Runtime Exception During Submission', {
            inputFieldId: submitButton.id,
            step: 'ajax_try_catch',
            error: error.message || String(error)
          });

          if (typeof decrementAttemptForm1 === 'function') {
            decrementAttemptForm1();
          }

          $("#reqdemosubmit1").prop('disabled', false);
        }
      }).catch(function (error) {
        console.error("reCAPTCHA execution failed:", error);

        logLeadError('reCAPTCHA v3 Execution Failed', {
          inputFieldId: submitButton.id,
          step: 'recaptcha_execution',
          error: error.message || String(error)
        });

        if (typeof decrementAttemptForm1 === 'function') {
          decrementAttemptForm1();
        }

        toastr.error('Security verification failed. Please try again.');
        $("#reqdemosubmit1").prop('disabled', false);
      });
    });
  }
  return false;
});
// referenceLead Form
$("#referenceLeadSubmit").click(function () {
  // IMPORTANT: Assuming client-side rate limiting helper function is available.
  if (typeof checkAndSetRateLimitForm1 === 'function' && !checkAndSetRateLimitForm1()) {
    return false;
  }

  $("#referenceLeadSubmit").prop('disabled', true);
  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];


  const selectEmployee = document.getElementById("selectEmployee");

  var refleadEmpid = selectEmployee.value;
  var refleadEmpName = selectEmployee.options[selectEmployee.selectedIndex].text;
  // console.log("Selected Value:", refleadEmpid);
  // console.log("Selected Text:", refleadEmpName);

  var name2 = $("#c-name").val();
  var companyname2 = $("#company-name").val();
  var cleanedCompanyName2 = companyname2.trim();
  // var email2 = $("#c_email").val(); 
  var country2 = $(".new-form .iti__selected-dial-code").text();
  var contact2 = $("#c_phone").val();
  var city2 = $("#c_city").val();
  // var remarks2 = $("#c_remarks").val();  
  // var connect2 = $("#connect_date").val();
  // var ecomPreference2 = $("input[name='ecomoption']:checked").val()
  // var selectedOutlet2 = $("#outlets").val();
  var plantype = '';
  var acceptrules = $("#acceptrules").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;
  var visitorurl = sessionStorage.getItem('refrerurl');
  // var submiturl = sessionStorage.getItem('submitUrl');

  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);
  console.log('New SubmitURL ---> ', submitUrl);


  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'reference_lead';

  console.log("Country >>", country2);
  // console.log("Email >>", email2);
  // console.log("Remarks >>", remarks2);
  // console.log("Connect Date >>", connect2);
  // console.log("Ecom Pref>>", ecomPreference2);
  // console.log("Outlets >>", selectedOutlet2);

  // dataLayer.push({ event: "gtm.js", 'phone_number': `contact2`, })
  async function hashPhoneNumber(countryCode, phoneNumber) {
    // Concatenate country code and phone number
    const originalPhoneNumber = `${countryCode}${phoneNumber}`;

    // Convert the concatenated string to a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);

    // Hash the data using the SubtleCrypto API
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert the hash to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }

  // Example usage
  const cCode = country2; // Replace with your actual country code
  const cMnumber = contact2; // Replace with your actual phone number

  // Hash the phone number
  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      // Push the hashed phone number to the dataLayer
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });

      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => console.error('Error:', error));

  console.log("encodeURIComponent(submitUrl)", encodeURIComponent(submitUrl))

  // *** CRITICAL JS CHANGE: Append actionType to dataString ***
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&country=' + country2 + '&contact=' + contact2 + '&city=' + city2 + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&refleadEmpId=' + refleadEmpid + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&actionType=' + actionType;

  // Assuming your form fields have IDs like name2, companyname2, contact2, city2, and c_phone
  $('#name2, #companyname2, #contact2, #city2, #c_phone').on('keyup', function () {
    // Check if all required fields are filled
    if ($('#name2').val().trim() !== '' &&
      $('#companyname2').val().trim() !== '' &&
      $('#refleadEmpid').val().trim() !== '' &&
      $('#contact2').val().trim() !== '' &&
      $('#city2').val().trim() !== '' &&
      $('#c_phone').val().length === 10) {

      // Enable the submit button
      $("#referenceLeadSubmit").prop('disabled', false);
    } else {
      // If any required field is empty, disable the submit button
      $("#referenceLeadSubmit").prop('disabled', true);
    }
  });

  // --- Client-Side Validation Checks ---
  var validationFailed = false;

  if (companyname2.trim() == '' || city2.trim() == '' || refleadEmpid == 0) {
    dataString = 'name=' + (name2 || " ") + '&companyname=' + (companyname2 || " ") + '&country=' + (country2 || " ") + '&contact=' + (contact2 || null) + '&city=' + (city2 || " ") + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&refleadEmpId=' + refleadEmpid + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&actionType=' + actionType; // actionType added here too

    if (name2 != '' || companyname2 != '' || contact2 != '') {

      // --- RECAPTCHA V3 INTEGRATION (for initial incomplete submission to DB) ---
      grecaptcha.ready(function () {
        grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

          var recaptcha_response = token;
          var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

          try {
            $.ajax({
              type: "POST",
              url: BASE_URL + "schedule-your-demo-database.php",
              data: dataStringWithToken, // Use dataStringWithToken
              cache: false,
              dataType: "json", // Expected by PHP for rate limit/recaptcha check
              success: function (result) {
                console.log("result:", result);

                //  Rate-Limiting: Handle rate-limit response from server
                if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
                  const timeRemaining = result.message.split('|')[1];
                  toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
                }
                // DUPLICATE CHECK BLOCK 
                else if (result.message && result.message.includes("Relax")) {
                  toastr.error("Relax! We've already got your lead.");
                  $("#referenceLeadSubmit").prop('disabled', false);
                  return;
                } else {
                  console.log("result:", result);
                  toastr.error('Attention! Incomplete Form Detected');
                }

                $("#referenceLeadSubmit").prop('disabled', false);

                //  Rate-Limiting: Decrement attempt on server failure (if not success)
                if (typeof decrementAttemptForm1 === 'function' && result.message !== 'success') { decrementAttemptForm1(); }
              },
              error: function (xhr, status, error) {
                //  Rate-Limiting: Decrement attempt on AJAX failure
                if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
                toastr.error('Network error during incomplete form submission.');
                $("#referenceLeadSubmit").prop('disabled', false);
              }
            });
          } catch (error) {
            console.log(error);
            //  Rate-Limiting: Decrement attempt on exception
            if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
            $("#referenceLeadSubmit").prop('disabled', false);
          }
        }).catch(function (error) {
          console.error("reCAPTCHA execution failed:", error);
          //  Rate-Limiting: Decrement attempt on reCAPTCHA failure
          if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
          toastr.error('Security verification failed. Please try again.');
          $("#referenceLeadSubmit").prop('disabled', false);
        });
      });
    } else {
      toastr.error('Attention! Incomplete Form Detected');
      $("#referenceLeadSubmit").prop('disabled', false);
    }
  }

  else if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    //  Rate-Limiting: Decrement attempt
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#referenceLeadSubmit").prop('disabled', false);
    return false;
  }


  else if (name2.length > 60 || companyname2.length > 60 || city2.length > 60) {
    toastr.error("You've entered too many characters");
    //  Rate-Limiting: Decrement attempt
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#referenceLeadSubmit").prop('disabled', false);
    return false;
  }
  else if (!iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
    //  Rate-Limiting: Decrement attempt
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#referenceLeadSubmit").prop('disabled', false);
    return false;
  }
  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(cleanedCompanyName2)) { // Added typeof check for safety
    toastr.error('Sorry! Timing Slots Not Available.');
    //  Rate-Limiting: Decrement attempt
    if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
    $("#referenceLeadSubmit").prop('disabled', false);
    return false;
  }
  else {
    // toastr.info('Message Sending...');

    // --- RECAPTCHA V3 IMPLEMENTATION START (for successful full submission) ---
    grecaptcha.ready(function () {
      // Execute reCAPTCHA with the specific action
      grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

        var recaptcha_response = token;
        var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

        toastr.info('Message Sending...');

        // --- AJAX CALL ---
        try {
          $.ajax({
            type: "POST",
            url: BASE_URL + "schedule-your-demo-latest.php",
            data: dataStringWithToken, // Use dataStringWithToken
            cache: false,
            dataType: "json", // Expected by PHP for rate limit/recaptcha check
            success: function (result) {
              console.log(result);

              //  Rate-Limiting: Handle rate-limit response from server
              if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
                const timeRemaining = result.message.split('|')[1];
                toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
                $("#referenceLeadSubmit").prop('disabled', false);
              }
              else if (result.message == 'success') {

                console.log("result:", result)
                $('#contact-form')[0].reset();
                toastr.success('Message Sent Successfully!!');
                populateDropdown();
                window.location = BASE_URL + `thanks-for-schedule-reference-lead?mob=${country2}${contact2}`;
              }
              // DUPLICATE CHECK BLOCK 
              else if (result.message && result.message.includes("Relax")) {
                toastr.error("Relax! We've already got your lead.");
                $("#referenceLeadSubmit").prop('disabled', false);
                return;
              }
              else {
                console.log("sorry");
                toastr.error('Oops! Something Went Wrong: ' + (result.message || 'Unknown server error.'));
                $("#referenceLeadSubmit").prop('disabled', false);

                //  Rate-Limiting: Decrement attempt on server failure
                if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }

                // Send email notification... (comments preserved)
                // $.ajax({
                //   type: "POST",
                //   url: BASE_URL + "send-email.php",
                //   data:dataString,
                //   cache: false,
                //   success: function (emailResult) {
                //     console.log("Email result:", emailResult);
                //   },
                //   error: function (xhr, status, error) {
                //     console.error("Email error:", error);
                //   }
                // });
              }
            }
          });

        } catch (error) {
          console.log(error);
          //  Rate-Limiting: Decrement attempt on exception
          if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
          $("#referenceLeadSubmit").prop('disabled', false);
        }
      }).catch(function (error) {
        console.error("reCAPTCHA execution failed:", error);
        //  Rate-Limiting: Decrement attempt on reCAPTCHA failure
        if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
        toastr.error('Security verification failed. Please try again.');
        $("#referenceLeadSubmit").prop('disabled', false);
      });
    });
    // --- RECAPTCHA V3 IMPLEMENTATION END ---
  }
  return false;
});


// $("#eventexposubmit").click(function () {
//   // alert("Hello")
//   $("#eventexposubmit").prop('disabled', true);
//   const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
//   var designation2 = $('#designation').val();
//   var leadPriority2 = $('#leadpriority').val();
//   var name2 = $("#c-name").val();
//   var companyname2 = $("#company-name").val();
//   var cleanedCompanyName2 = companyname2.trim();
//   var email2 = $("#c_email").val();
//   var country2 = $(".new-form .iti__selected-dial-code").text();
//   var contact2 = $("#c_phone").val();
//   var city2 = $("#c_city").val();
//   var remarks2 = $("#c_remarks").val();
//   var connect2 = $("#connect_date").val();
//   var ecomPreference2 = $("input[name='ecomoption']:checked").val()
//   var selectedOutlet2 = $("#outlets").val();
//   var plantype = '';
//   var acceptrules = $("#acceptrules").val();
//   var secretKey = "";
//   var sessionId = smartlook.sessionId;
//   var visitorurl = sessionStorage.getItem('refrerurl');

//   console.log("Designation >>", designation2)
//   console.log("Lead Priority >>", leadPriority2)
//   console.log("Country >>", country2);
//   console.log("Remarks >>", remarks2);

//   console.log("Connect Date >>", connect2);
//   console.log("Ecom Pref>>", ecomPreference2);
//   console.log("Outlets >>", selectedOutlet2);

//   // dataLayer.push({ event: "gtm.js", 'phone_number': `contact2`, })
//   async function hashPhoneNumber(countryCode, phoneNumber) {
//     // Concatenate country code and phone number
//     const originalPhoneNumber = `${countryCode}${phoneNumber}`;

//     // Convert the concatenated string to a Uint8Array
//     const encoder = new TextEncoder();
//     const data = encoder.encode(originalPhoneNumber);

//     // Hash the data using the SubtleCrypto API
//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);

//     // Convert the hash to a hexadecimal string
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

//     return hashHex;
//   }

//   // Example usage
//   const cCode = country2; // Replace with your actual country code
//   const cMnumber = contact2; // Replace with your actual phone number

//   // Hash the phone number
//   hashPhoneNumber(cCode, cMnumber)
//     .then(hashedPhoneNumber => {
//       // Push the hashed phone number to the dataLayer
//       var dataLayer = window.dataLayer = window.dataLayer || [];
//       dataLayer.push({
//         event: 'gtm.js',
//         'phone_number': hashedPhoneNumber,
//       });

//       console.log('Hashed Phone Number:', hashedPhoneNumber);
//     })
//     .catch(error => console.error('Error:', error));


//   var dataString = 'designation=' + designation2 + '&name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + country2 + '&contact=' + contact2 + '&city=' + city2 + '&remarks=' + remarks2 + '&connectdate=' + connect2 + '&leadpriority=' + leadPriority2 + '&ecomprefrence=' + ecomPreference2 + '&outlets=' + selectedOutlet2 + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl);
//   // Assuming your form fields have IDs like name2, companyname2, contact2, city2, and c_phone
//   $('#name2, #companyname2, #contact2, #city2, #c_phone').on('keyup', function () {
//     // Check if all required fields are filled
//     if ($('#name2').val().trim() !== '' &&
//       $('#companyname2').val().trim() !== '' &&
//       $('#contact2').val().trim() !== '' &&
//       $('#city2').val().trim() !== '' &&
//       $('#c_phone').val().length === 10) {

//       // Enable the submit button
//       $("#eventexposubmit").prop('disabled', false);
//     } else {
//       // If any required field is empty, disable the submit button
//       $("#eventexposubmit").prop('disabled', true);
//     }
//   });

//   if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
//     toastr.error('Attention! Incomplete Form Detected');
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else if (name2.length > 60 || companyname2.length > 60 || city2.length > 60) {
//     toastr.error("You've entered too many characters");
//     return false;
//   }
//   else if (!iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
//     toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else if (invalidbusinessname.includes(cleanedCompanyName2)) {
//     toastr.error('Sorry! Timing Slots Not Available.');
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else {
//     // toastr.info('Message Sending...');
//     try {
//       $.ajax({
//         type: "POST",
//         url: BASE_URL + "event-expo-demo-latest.php",
//         data: dataString,
//         cache: false,
//         success: function (result) {
//           `console.log(result);
//           if (result.message == 'success') {
//             console.log("result:", result)
//             $('#contact-form')[0].reset();
//             toastr.success('Message Sent Successfully!!');
//             window.location = BASE_URL + `thanks-home?mob=${country2}${contact2}`;
//           } else {
//             console.log("sorry");
//             toastr.error('Oops! Something Went Wrong');
//             $("#eventexposubmit").prop('disabled', false);
//           }`
//         }
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return false;
// });

// $("#eventexposubmit").click(function () {
//   // alert("Hello")
//   $("#eventexposubmit").prop('disabled', true);
//   const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
//   var designation2 = $('#designation').val();
//   var leadPriority2 = $('#leadpriority').val();
//   var name2 = $("#c-name").val();
//   var companyname2 = $("#company-name").val();
//   var cleanedCompanyName2 = companyname2.trim();
//   var email2 = $("#c_email").val();
//   var country2 = $(".new-form .iti__selected-dial-code").text();
//   var contact2 = $("#c_phone").val();
//   var city2 = $("#c_city").val();
//   var remarks2 = $("#c_remarks").val();
//   var connect2 = $("#connect_date").val();
//   var ecomPreference2 = $("input[name='ecomoption']:checked").val()
//   var selectedOutlet2 = $("#outlets").val();
//   var plantype = '';
//   var acceptrules = $("#acceptrules").val();
//   var secretKey = "";
//   var sessionId = smartlook.sessionId;
//   var visitorurl = sessionStorage.getItem('refrerurl');

//   var dataString = 'designation=' + designation2 + '&name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + country2 + '&contact=' + contact2 + '&city=' + city2 + '&remarks=' + remarks2 + '&connectdate=' + connect2 + '&leadpriority=' + leadPriority2 + '&ecomprefrence=' + ecomPreference2 + '&outlets=' + selectedOutlet2 + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl);

//   if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
//     toastr.error('Attention! Incomplete Form Detected');
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else if (name2.length > 60 || companyname2.length > 60 || city2.length > 60) {
//     toastr.error("You've entered too many characters");
//     return false;
//   }
//   else if (!iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
//     toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else if (invalidbusinessname.includes(cleanedCompanyName2)) {
//     toastr.error('Sorry! Timing Slots Not Available.');
//     $("#eventexposubmit").prop('disabled', false);
//     return false;
//   }
//   else {
//        toastr.success('Message Sending');
//   }
// });

// GCC Form UAE
$("#uaereqdemosubmit").click(function () {
  var name2 = $("#gcc_c-name").val();
  var companyname2 = $("#gcc_company-name").val();
  var email2 = $("#gcc-mail").val();
  var cc = "971";
  var contact2 = $("#gcc_c_phone").val();
  var city2 = $("#gcc_c_city").val();
  var plantype = '';
  var acceptrules = $("#gcc_acceptrules").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + cc + '&contact=' + contact2 + '&city=' + city2 + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId;
  if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
    // } else if ($("#gcc_c_phone").val().length !== 15) {
    //   toastr.error('Mobile no. should be 15 digit');
    //   return false;
  } else if (invalidbusinessname.includes(companyname2)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    return false;
  } else {
    toastr.info('Message Sending...');
    try {

      $.ajax({
        type: "POST",
        url: BASE_URL + "gcc-schedule-your-demo-latest.php",
        data: dataString,
        cache: false,
        success: function (result) {
          if (result == 'success') {
            console.log("done");
            $('#gcc-contact-form')[0].reset();
            toastr.success('Message Sent Successfully!!');
            window.location = BASE_URL + 'uae-thanks-home';
          } else {
            console.log("sorry");
            toastr.error('Oops! Something Went Wrong');
          }
        }
      });

    } catch (error) {
      console.log(error);
    }
  }
  return false;
});

// GCC Form Saudi
$("#saudireqdemosubmit").click(function () {
  var name2 = $("#gcc_c-name").val();
  var companyname2 = $("#gcc_company-name").val();
  var email2 = $("#gcc-mail").val();
  var country2 = "966";
  var contact2 = $("#gcc_c_phone1").val();
  var city2 = $("#gcc_c_city").val();
  var plantype = '';
  var acceptrules = $("#gcc_acceptrules").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + country2 + '&contact=' + contact2 + '&city=' + city2 + '&acceptrules=' + acceptrules + '&plantype= ' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId;
  if (name2.trim() == '' || companyname2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
    // } else if ($("#gcc_c_phone").val().length !== 15) {
    //   toastr.error('Mobile no. should be 15 digit');
    //   return false;
  } else if (invalidbusinessname.includes(companyname2)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    return false;
  } else {
    toastr.info('Message Sending...');
    try {

      $.ajax({
        type: "POST",
        url: BASE_URL + "gcc-schedule-your-demo-latest.php",
        data: dataString,
        cache: false,
        success: function (result) {
          if (result == 'success') {
            console.log("done");
            $('#gcc-contact-form')[0].reset();
            toastr.success('Message Sent Successfully!!');
            window.location = BASE_URL + 'saudi-arabia-thanks-home';
          } else {
            console.log("sorry");
            toastr.error('Oops! Something Went Wrong');
          }
        }
      });

    } catch (error) {
      console.log(error);
    }
  }
  return false;
});

// new code Partners Form
$("#partners-btn").click(function () {
  // IMPORTANT: Add client-side rate limiting check
  // NOTE: Assuming 'checkAndSetRateLimitForm2' and 'decrementAttemptForm2' are available for this form.
  if (typeof checkAndSetRateLimitForm2 === 'function' && !checkAndSetRateLimitForm2()) {
    return false;
  }

  $("#partners-btn").prop('disabled', true); // Disable button on click

  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name2 = $("#c-name").val();
  var companyname2 = $("#company-name").val();
  var email2 = $("#c_email").val();
  var cc = $(".partner-form .iti__selected-dial-code").text();
  var contact2 = $("#c_phone").val();
  var city2 = $("#c_city").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;

  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'partner_inquiry';

  // Initial data string without reCAPTCHA token
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + cc + '&contact=' + contact2 + '&city=' + city2 + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&actionType=' + actionType;

  var emailInput = document.getElementById('c_email');

  // Email validation regular expression
  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // --- Client-Side Validation Checks ---
  var validationFailed = false;

  if (name2.trim() == '' || companyname2.trim() == '' || email2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;
  }
  else if (!iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
    validationFailed = true;
  }
  else if (!emailRegex.test(email2)) {
    toastr.error('Please enter a valid email address.');
    validationFailed = true;
  }

  // Handle validation failure
  if (validationFailed) {
    if (typeof decrementAttemptForm2 === 'function') {
      decrementAttemptForm2();
    }
    $("#partners-btn").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action 'partner_inquiry'
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

      var recaptcha_response = token;
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      toastr.info('Message Sending...');

      // --- AJAX CALL ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "partners-form.php",
          data: dataStringWithToken, // Use dataStringWithToken
          cache: false,
          dataType: "json", // Expect JSON response from server
          success: function (result) {
            if (result.message === 'success') {
              $('#contact-form')[0].reset();
              toastr.success('Message Sent Successfully!!');
              window.location = BASE_URL + 'business-partnership-inquiry';
            }
            // --- one lead in 24 hr ---
            else if (result.message === "Relax! We've got your lead.") {
              toastr.error(result.message);
              // Keep the button disabled because we already have their lead
              $("#partners-btn").prop('disabled', true);
            }
            // -----------------------
            else if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds.');
              $("#partners-btn").prop('disabled', false);
            } else {
              toastr.error('Oops! ' + (result.message || 'Unknown error'));
              $("#partners-btn").prop('disabled', false);
            }
          },
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission.';
            if (status === 'parsererror') {
              errorMessage += ' Server returned invalid JSON.';
            }
            toastr.error(errorMessage);
            $("#partners-btn").prop('disabled', false);
            if (typeof decrementAttemptForm2 === 'function') { decrementAttemptForm2(); }
          }
        });
      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred.');
        $("#partners-btn").prop('disabled', false);
        if (typeof decrementAttemptForm2 === 'function') { decrementAttemptForm2(); }
      }

    }).catch(function (error) {
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptForm2 === 'function') {
        decrementAttemptForm2();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#partners-btn").prop('disabled', false);
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

// new code Partner Modal form
$("#modal-partners-btn").click(function () {

  // IMPORTANT: Add client-side rate limiting check for this modal.
  // NOTE: Assuming 'checkAndSetRateLimitForm3' and 'decrementAttemptForm3' are available.
  if (typeof checkAndSetRateLimitForm3 === 'function' && !checkAndSetRateLimitForm3()) {
    return false;
  }

  $("#modal-partners-btn").prop('disabled', true); // Disable button on click

  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name2 = $("#partner-name").val();
  var companyname2 = $("#partner-company-name").val();
  var email2 = $("#partner_email").val();
  var cc = $(".partner-form-modal .iti__selected-dial-code").text();
  var contact2 = $("#partner_phone").val();
  var city2 = $("#partner_city").val();
  var secretKey = "";
  var sessionId = smartlook.sessionId;

  // *** CRITICAL JS CHANGE: Define actionType for server check (e.g., 'partner_modal_inquiry') ***
  var actionType = 'partner_modal_inquiry';

  // Initial data string without reCAPTCHA token
  var dataString = 'name=' + name2 + '&companyname=' + companyname2 + '&email=' + email2 + '&country=' + cc + '&contact=' + contact2 + '&city=' + city2 + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&actionType=' + actionType;

  var emailInput = document.getElementById('partner_email');

  // Email validation regular expression
  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // --- Client-Side Validation Checks ---
  var validationFailed = false;

  if (name2.trim() == '' || companyname2.trim() == '' || email2.trim() == '' || contact2.trim() == '' || city2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;
  }
  else if (!partnerItiModal.isValidNumber() && errorMapForm[partnerItiModal.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[partnerItiModal.getValidationError()]);
    validationFailed = true;
  }
  else if (!emailRegex.test(email2)) {
    toastr.error('Please enter a valid email address.');
    validationFailed = true;
  }

  // Handle validation failure
  if (validationFailed) {
    if (typeof decrementAttemptForm3 === 'function') {
      decrementAttemptForm3();
    }
    $("#modal-partners-btn").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: actionType }).then(function (token) {

      var recaptcha_response = token;
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      toastr.info('Message Sending...');

      // --- AJAX CALL ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "partners-form.php",
          data: dataStringWithToken, // Use dataStringWithToken
          cache: false,
          dataType: "json", // Expect JSON response from the server (partners-form.php)
          success: function (result) {
            if (result.message === 'success') {
              $('#contact-form')[0].reset();
              toastr.success('Message Sent Successfully!!');
              window.location = BASE_URL + 'business-partnership-inquiry';
            }
            // --- one lead in 24 hr ---
            else if (result.message === "Relax! We've got your lead.") {
              toastr.error(result.message);
              // Keep the button disabled because we already have their lead
              $("#modal-partners-btn").prop('disabled', true);
            }
            // -----------------------
            else if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds.');
              $("#modal-partners-btn").prop('disabled', false);
            } else {
              toastr.error('Oops! ' + (result.message || 'Unknown error'));
              $("#modal-partners-btn").prop('disabled', false);
            }
          },
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission.';
            if (status === 'parsererror') {
              errorMessage += ' Server returned invalid JSON.';
            }
            toastr.error(errorMessage);
            $("#modal-partners-btn").prop('disabled', false);
            if (typeof decrementAttemptForm3 === 'function') { decrementAttemptForm3(); }
          }
        });
      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred.');
        $("#modal-partners-btn").prop('disabled', false);
        if (typeof decrementAttemptForm3 === 'function') { decrementAttemptForm3(); }
      }

    }).catch(function (error) {
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptForm3 === 'function') {
        decrementAttemptForm3();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#modal-partners-btn").prop('disabled', false);
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

//Schedule a Demo Modal Form
var $submitBtn = $('#submit');

$('#c_phone1').on('input paste', function () {
  // Add a delay to wait for the input to be updated after paste
  if ($("#c_phone1").val().length === 10) {
    setTimeout(function () {
      checkmobile('c_phone1');
    }, 100);
  }
});

function checkmobile1(id) {
  if (BASE_URL == LIVE_URL) {
    var hasError = false;
    $.ajax({
      type: "GET",
      url: BASE_URL + "checkmobile.php?mobileNo=" + $("#" + id).val(),
      cache: false,
      success: function (result) {
        if (result.trim() == 1) {
          console.log("New Mobile!!");
          $('#sendotp-btn1').prop('disabled', false);
          $submitBtn.prop('disabled', false);
          $("#modal-partners-btn").prop('disabled', false);
        } else {
          console.log("Mobile Already!!");
          $('#sendotp-btn1').prop('disabled', true);
          $submitBtn.prop('disabled', true);
          $("#modal-partners-btn").prop('disabled', true);
          toastr.error("Relax! We've got your lead.");
          hasError = true;
        }
      },
      error: function () {
        toastr.error('An error occurred while checking the mobile number');
        hasError = true;
        logLeadError('Mobile Verification Check Failed', {
          step: 'checkmobile_ajax_error',
          inputFieldId: id,
          inputValue: $("#" + id).val(),
          status: arguments[1] || 'error',
          error: arguments[2] || 'Unknown AJAX Error'
        });
      },
      async: false
    });
    return hasError;
  }
  else {
    console.log("Testing Server");
  }
}

var otpcount = 0;
var editOtpButton1 = $('#editphone-btn1');

function sendotp1() {
  $("#sendotp-btn1").prop('disabled', true);
  var number = $("#c_phone11").val();


  if (number != null && number.length == 10) {

    var input = {
      "phone": number,

      "action": "send_otp"
    };

    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      data: input,
      cache: false,
      success: function (response) {
        if (response == "success") {
          toastr.success('OTP Sent Successfully!');
          console.log(response);
          $("#c_phone11").prop('disabled', true);
          $('#click-show1').removeClass('d-none');
          $('#sendotp-btn1').addClass('d-none');
          editOtpButton1.removeClass('d-none');
          otpcount += 1;

          // Check if edit OTP button should be disabled after 3 times
          if (otpcount >= 3) {
            editOtpButton1.prop("disabled", true);
            toastr.error('You can edit phone number 3 times only');
          }

          // Disable all send OTP buttons if the count reaches 3
          if (otpcount >= 3) {
            $("#sendotp-btn, #sendotp-btn1, #sendotp-btn2").prop("disabled", true);
          }
        } else {
          console.log("error");
        }
      },
      error: function () {
        toastr.error('An error occurred while sending OTP');
      }
    });
  } else {
    console.log("Please enter a valid number!");
    toastr.error('Please enter a valid number!');
    $("#sendotp-btn1").prop('disabled', false);
  }
}

function editphone1() {
  $("#sendotp-btn1").prop('disabled', false);
  $("#c_phone11").prop('disabled', false);
  $('#otp1').val("");
  $('#otp1').prop("disabled", false);
  $('#verifyotp-btn1').val('Verify');
  $('#verifyotp-btn1').prop("disabled", false);
  $('#click-show1').addClass('d-none');
  $('#editphone-btn1').addClass('d-none');
  $('#sendotp-btn1').removeClass('d-none');
}

function verifyotp1() {
  var otp = $("#otp1").val();
  var input = {
    "otp": otp,
    "action": "verify_otp"
  };
  if (otp != null && otp.length == 6) {
    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      dataType: "json",
      data: input,
      cache: false,
      success: function (response) {
        $("." + response.type).html(response.message)
        $("." + response.type).show();
        if (response.type == "success") {
          toastr.success('OTP Verified Successfully!');
          $('#verifyotp-btn1').val('Verified');
          $('#verifyotp-btn1').prop("disabled", true);
          $("#otp1").prop('disabled', true);
          $('#editphone-btn1').attr("disabled");
          otpverifiedmodal = 1;
        } else if (response.type == "error") {
          toastr.error('Invalid OTP');
        } else {
          toastr.error('Something Went Wrong');
        }
      },
      error: function () {
        console.log("OTP Verification Failed!");
      }
    });
  } else {
    console.log("Please Enter OTP");
    toastr.error('Please Enter OTP');
  }
}

autoverifyotp1 = (e) => ($(e).val().length == 6) ? verifyotp1() : '';

$("#acceptrules1").on('change', function () {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }
});

$("#submit").click(function () {
  // IMPORTANT: Assuming client-side rate limiting helper function is available.
  if (typeof checkAndSetRateLimitForm1 === 'function' && !checkAndSetRateLimitForm1()) {
    return false;
  }

  const submitButton = this;

  $("#submit").prop('disabled', true);

  const errorMapModal = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name22 = $("#c-name1").val();
  var companyname22 = $("#company-name1").val();
  var cleanedCompanyName22 = companyname22.trim();
  var email22 = "";
  var country22 = $(".popup-form .iti__selected-dial-code").text();
  var contact22 = $("#c_phone1").val();
  var city22 = $("#c_city1").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules1").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var visitorurl = sessionStorage.getItem('refrerurl');
  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);

  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'book_demo';

  console.log("country2>>", country22)

  // Original: Hash the phone number and push to dataLayer
  async function hashPhoneNumber(countryCode, phoneNumber) {
    const originalPhoneNumber = `+${countryCode}${phoneNumber}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  const cCode = country22;
  const cMnumber = contact22;

  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });
      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => {
      console.error('Error in hashing:', error);

      // 2) Point 2: Phone number hashing failure
      logLeadError('Phone Hash Conversion Failed', {
        step: 'hash_phone_number',
        countryCode: cCode,
        contactNumber: cMnumber,
        error: error.message || String(error)
      });
    });

  // *** CRITICAL JS CHANGE: Append actionType to dataString ***
  var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&actionType=' + actionType;

  // Assuming your form fields have IDs like name22, companyname22, contact22, city22, and c_phone1
  $('#name22, #companyname22, #contact22, #city22, #c_phone1').on('keyup', function () {
    // Check if all required fields are filled
    if ($('#name22').val().trim() !== '' &&

      $('#companyname22').val().trim() !== '' &&
      $('#contact22').val().trim() !== '' &&
      $('#city22').val().trim() !== '' &&
      $('#c_phone1').val().length === 10) {
      console.log("Element name exists and is not empty");
      // Enable the submit button
      $("#submit").prop('disabled', false);
    } else {
      // If any required field is empty, disable the submit button
      $("#submit").prop('disabled', true);
    }
  });
  // --- Client-Side Validation Checks ---
  var validationFailed = false;

  if (name22.trim() == '' || companyname22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;
  }
  else if (name22.length > 60 || companyname22.length > 60 || city22.length > 60) {
    toastr.error('Allow Maximum 60 character');
    validationFailed = true;
  }
  else if (!itiModal1.isValidNumber() && errorMapModal[itiModal1.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapModal[itiModal1.getValidationError()]);
    validationFailed = true;
  }
  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(cleanedCompanyName22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    validationFailed = true;
  }

  if (validationFailed) {
    if (typeof decrementAttemptForm1 === 'function') {
      decrementAttemptForm1();
    }
    $("#submit").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action 'book_demo' (Client side is correct)
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'book_demo' }).then(function (token) {

      var recaptcha_response = token;
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      // --- Dynamic Toastr Message Logic Based on URL & Device ---
      if (window.location.href.includes("vasy.ai/vina/index.html")) {
        // Check if screen width is mobile-sized (less than 768px) or matches mobile user-agents
        var isMobile = window.innerWidth <= 767 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
          toastr.info('✅ Early Access Request Submitted Successfully.');
        } else {
          toastr.info('✅ Your Request For VINA Early Access Has Been Submitted Successfully.');
        }
      } else {
        toastr.info('Booking Demo...');
      }

      // --- AJAX CALL ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "requestdemomoblatest.php",
          data: dataStringWithToken,
          cache: false,
          dataType: "json",
          success: function (result) {
            // 1. Handle Successful first-time submission
            if (result.message === 'success') {
              console.log("done");
              toastr.success('Message Sent Successfully!!');
              $('#contact-form1')[0].reset();

              // --- Added specific page check without redirection ---
              if (window.location.href.includes("partner/")) {
                window.location = BASE_URL + `partner-thank-you?mob=${country22}${contact22}`;
              } else if (window.location.href.includes("global.vasy.ai/vina/index.html") || window.location.href.includes("vasy.ai/vina/index.html")) {
                toastr.success('Applied Successfully!');
                $("#scheduleademo").removeClass('show'); // Removes the 'show' class
                $(".modal-backdrop").remove(); // Removes the backdrop element entirely from the DOM
              } else {
                window.location = BASE_URL + `thanks-for-schedule?mob=${country22}${contact22}`;
              }
            }
            // 2. Handle Duplicate Lead (Second time) - prefix here
            else if (result.message === "Relax! We've got your lead.") {
              toastr.error(result.message); // Displays the message to the user
              $("#submit").prop('disabled', true); // Re-enables button
            }
            // 3. Handle Rate Limit specifically
            else if (result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds.');
              $("#submit").prop('disabled', false);
            }
            // 4. Handle actual errors with the prefix
            else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong: ' + (result.message || 'Unknown server error.'));
              $("#submit").prop('disabled', false);
              // 3) Point 3: Server returned failure inside JSON response
              logLeadError('Lead Endpoint Returned Server Error', {
                inputFieldId: submitButton.id,
                step: 'requestdemomoblatest_response_error',
                responseMessage: result.message,
                leadContact: country22 + contact22
              });
            }

            // Prevent attempt decrementing if it's a duplicate or success
            if (typeof decrementAttemptForm1 === 'function' && result.message !== 'success' && result.message !== "Relax! We've got your lead.") {
              decrementAttemptForm1();
            }
          },
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission. ';

            if (status === 'parsererror') {
              // Simplified JSON Parse Error message to hide technical details
              errorMessage = 'Security verification failed. Please try submitting again.';
            } else {
              errorMessage += 'Status: ' + status + ', Error: ' + error;
            }

            toastr.error(errorMessage);
            $("#submit").prop('disabled', false);
            if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
            // 4) Point 4: Network/Server HTTP Error or JSON parsing failure
            logLeadError('AJAX Request Failed during Lead Submission', {
              inputFieldId: submitButton.id,
              step: 'requestdemomoblatest_ajax_error',
              status: status,
              error: error,
              responseText: xhr.responseText ? xhr.responseText.substring(0, 300) : ''
            });
          }
        });
      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred.');
        $("#submit").prop('disabled', false);
        if (typeof decrementAttemptForm1 === 'function') { decrementAttemptForm1(); }
        // 5) Point 5: JS Runtime Catch block failure
        logLeadError('JS Runtime Exception during Submission', {
          inputFieldId: submitButton.id,
          step: 'ajax_try_catch',
          error: error.message || String(error)
        });
      }

    }).catch(function (error) {
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptForm1 === 'function') {
        decrementAttemptForm1();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#submit").prop('disabled', false);
      // 6) Point 6: Google reCAPTCHA v3 Execution Failure
      logLeadError('reCAPTCHA v3 Execution Failed', {
        inputFieldId: submitButton.id,
        step: 'recaptcha_execution',
        error: error.message || String(error)
      });
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

$("#submit2").click(function () {
  var name22 = $("#c-name1").val();
  var companyname22 = $("#company-name1").val();
  var cleanedCompanyName22 = companyname22.trim();
  var email22 = "";
  var country22 = "91";
  var contact22 = $("#c_phone1").val();
  var city22 = $("#c_city1").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules1").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var visitorurl = sessionStorage.getItem('refrerurl');

  var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl);
  if (name22.trim() == '' || companyname22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
  } else if ($("#c_phone1").val().length !== 10) {
    toastr.error('Mobile no. should be 10 digit');
    return false;
  } else if (invalidbusinessname.includes(cleanedCompanyName22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    return false;
  } else {
    toastr.info('Message Sending...');
    try {
      $.ajax({
        type: "POST",
        url: BASE_URL + "requestdemomoblatest.php",
        data: dataString,
        cache: false,
        success: function (result) {
          if (result == 'success') {
            console.log("done");
            toastr.success('Message Sent Successfully!!');
            $('#contact-form1')[0].reset();
            window.location = BASE_URL + 'thanks-for-schedule';
          } else {
            console.log("sorry");
            toastr.error('Oops! Something Went Wrong');
            $("#submit2").prop('disabled', false);
          }
          //alert(result);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }
  return false;
});

// new code for landing page watch demo form
$("#submit3").click(function () {
  // IMPORTANT: Add client-side rate limiting check at the start.
  if (typeof checkAndSetRateLimitForm3 === 'function' && !checkAndSetRateLimitForm3()) {
    return false;
  }

  $("#submit3").prop('disabled', true);
  const errorMapModal = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name22 = $("#c-name12").val();
  var companyname22 = $("#company-name12").val();
  var cleanedCompanyName22 = companyname22.trim().toUpperCase(); // Uppercase for comparison
  var email22 = "";
  var country22 = $(".popup-form-demo .iti__selected-dial-code").text();
  var contact22 = $("#c_phone12").val();
  var city22 = $("#c_city12").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules12").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var visitorurl = sessionStorage.getItem('refrerurl');

  // pop soruce define value
  var striptype = "product";

  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'watch_demo';

  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);
  console.log('New SubmitURL ---> ', submitUrl);

  console.log("country2>>", country22)

  // Original: Hash the phone number and push to dataLayer
  async function hashPhoneNumber(countryCode, phoneNumber) {
    // Concatenate country code and phone number
    const originalPhoneNumber = `${countryCode}${phoneNumber}`;

    // Convert the concatenated string to a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);

    // Hash the data using the SubtleCrypto API
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert the hash to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }

  // Example usage
  const cCode = country22;
  const cMnumber = contact22;

  // Hash the phone number
  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      // Push the hashed phone number to the dataLayer
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });

      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => console.error('Error:', error));

  // *** CRITICAL JS CHANGE: Append actionType to dataString ***
  var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&stripType=' + striptype + '&actionType=' + actionType;

  // Continuous keyup/change validation listener (might conflict with the main click handler, but preserved for requested integration)
  $('#name22, #companyname22, #contact22, #city22, #c_phone1').on('keyup', function () {
    // Check if all required fields are filled
    if ($('#name22').val().trim() !== '' &&
      $('#companyname22').val().trim() !== '' &&
      $('#contact22').val().trim() !== '' &&
      $('#city22').val().trim() !== '' &&
      $('#c_phone1').val().length === 10) {
      console.log("Element name exists and is not empty");
      // Enable the submit button
      $("#submit3").prop('disabled', false);
    } else {
      // If any required field is empty, disable the submit button
      $("#submit3").prop('disabled', true);
    }
  });

  // --- Client-Side Validation Checks (Original logic preserved) ---
  var validationFailed = false;

  if (name22.trim() == '' || companyname22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;

  }
  else if (name22.length > 60 || companyname22.length > 60 || city22.length > 60) {

    toastr.error('Allow Maximum 60 character');
    validationFailed = true;
  }
  else if (!itiModal.isValidNumber() && errorMapModal[itiModal.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapModal[itiModal.getValidationError()]);
    validationFailed = true;
  }

  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(cleanedCompanyName22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    validationFailed = true;
  }

  // Handle client-side validation failure
  if (validationFailed) {
    // Decrement attempt if validation failed
    if (typeof decrementAttemptForm3 === 'function') {
      decrementAttemptForm3();
    }
    $("#submit3").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action 'watch_demo' (Client side is correct)
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'watch_demo' }).then(function (token) {

      var recaptcha_response = token;
      // Append the token to the data string
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      toastr.info('Booking Demo...');

      // --- AJAX CALL (MODIFIED FOR JSON HANDLING) ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "requestdemomoblatest.php",
          data: dataStringWithToken,
          cache: false,
          dataType: "json",
          success: function (result) {

            // Handle server-side errors, including rate limit error (assuming JSON response)
            if (result && result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              // --- SERVER-SIDE RATE LIMIT ERROR HANDLING ---
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
              $("#submit3").prop('disabled', false);
            }
            // Original success logic
            else if (result && result.message == 'success') {
              console.log("done");
              console.log("response", result.response);
              toastr.success('Message Sent Successfully!!');
              $('#contact-form2')[0].reset();
              window.location = BASE_URL + `retail-erp-demo-overview?mob=${country22}${contact22}`;
            }
            //  Handle Duplicate Lead (Second time) - prefix here
            else if (result.message === "Relax! We've got your lead.") {
              // We use toastr.info or toastr.warning and show ONLY the server message
              toastr.error(result.message);
              $("#submit").prop('disabled', false);
            } else {
              // General error handling (includes reCAPTCHA score/mismatch fail)
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong: ' + (result ? (result.message || JSON.stringify(result)) : 'Unknown server error.'));
              $("#submit3").prop('disabled', false);
            }
            if (typeof decrementAttemptForm3 === 'function' && result.message !== 'success') { decrementAttemptForm3(); }
          },
          // Improved error handling to show network details if available
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission. ';
            if (status === 'parsererror') {
              errorMessage += 'Server returned invalid JSON. Check PHP output for accidental ECHO or WHITESPACE.';
            } else {
              errorMessage += 'Status: ' + status + ', Error: ' + error;
            }
            toastr.error(errorMessage);
            $("#submit3").prop('disabled', false);
            if (typeof decrementAttemptForm3 === 'function') { decrementAttemptForm3(); }
          }
        });

      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred.');
        $("#submit3").prop('disabled', false);
        if (typeof decrementAttemptForm3 === 'function') { decrementAttemptForm3(); }
      }

    }).catch(function (error) {
      // ReCAPTCHA execution failure
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptForm3 === 'function') {
        decrementAttemptForm3();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#submit3").prop('disabled', false);
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

// new code for erp form button on popup
$("#erp-form-btn").click(function () {
  // 1. IMPORTANT: Add client-side rate limiting check at the start.
  // Assuming checkAndSetRateLimitFormERP() is the helper function for this specific form.
  if (typeof checkAndSetRateLimitFormERP === 'function' && !checkAndSetRateLimitFormERP()) {
    return false;
  }

  $("#erp-form-btn").prop('disabled', true);
  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var erpName = $("#erp-c-name").val();
  var erpCompanyname = $("#erp-company-name").val();
  // Ensure consistency in uppercase comparison
  var erpCleanedCompanyName = erpCompanyname.trim().toUpperCase();
  var erpEmail = $("#erp-email").val();
  var erpIndustry = "";
  var erpCountry = $(".erp-pop-form .iti__selected-dial-code").text();
  console.log("This is Code", erpCountry)
  var erpContact = $("#erp-c_phone").val();
  var erpCity = $("#erp-c_city").val();
  var plantype = " ";
  var acceptrules1 = $("#erp-acceptrules").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var visitorurl = sessionStorage.getItem('refrerurl');
  var submiturl = submitUrl;

  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'erp_form_submit';

  console.log("country2>>", erpCountry)

  // Hash the phone number
  async function hashPhoneNumber(countryCode, phoneNumber) {
    const originalPhoneNumber = `+${countryCode}${phoneNumber}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  const cCode = erpCountry;
  const cMnumber = erpContact;

  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });
      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => console.error('Error:', error));

  // *** CRITICAL JS CHANGE: Append actionType to dataString ***
  var dataString = 'name=' + erpName + '&companyname=' + erpCompanyname + '&email=' + erpEmail + '&country=' + erpCountry + '&contact=' + erpContact + '&city=' + erpCity + '&industry=' + erpIndustry + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submiturl=' + encodeURIComponent(submiturl) + '&actionType=' + actionType;

  // Assuming your form fields have IDs like name22, companyname22, email22, contact22, city22, and c_phone11
  $('#erpName, #erpCompanyname, #erpEmail, #erpContact, #erpCity, #erp-c_phone').on('keyup change', function () {
    // Check if all required fields are filled
    if ($('#erpName').val().trim() !== '' &&
      $('#erpCompanyname').val().trim() !== '' &&
      $('#erpEmail').val().trim() !== '' &&
      // $('#erpIndustry').val().trim() !== '' &&
      $('#erpContact').val().trim() !== '' &&
      $('#erpCity').val().trim() !== '' &&
      $('#erp-c_phone').val().length === 10 &&
      emailRegex.test($('#erpEmail').val())) {

      // Enable the submit button if all fields are valid
      $("#erp-form-btn").prop('disabled', false);
    } else {
      // Disable the submit button if any field is invalid
      $("#erp-form-btn").prop('disabled', true);
    }
  });

  // Email validation regular expression
  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var validationFailed = false;

  // --- Client-Side Validation Checks ---
  if (erpName.trim() == '' || erpCompanyname.trim() == '' || erpEmail.trim() == '' || erpContact.trim() == '' || erpCity.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;
  }
  else if (!itiModalErp.isValidNumber() && errorMapForm[itiModalErp.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[itiModalErp.getValidationError()]);
    validationFailed = true;
  }
  else if (!emailRegex.test(erpEmail)) {
    toastr.error('Please enter a valid email address');
    validationFailed = true;
  }
  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(erpCleanedCompanyName)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    validationFailed = true;
  }

  if (validationFailed) {
    if (typeof decrementAttemptFormERP === 'function') {
      decrementAttemptFormERP();
    }
    $("#erp-form-btn").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action 'erp_form_submit' (Client side is correct)
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'erp_form_submit' }).then(function (token) {

      var recaptcha_response = token;
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      toastr.info('Message Sending...');

      // --- AJAX CALL ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "requestdemomoblatest.php",
          data: dataStringWithToken,
          cache: false,
          dataType: "json",
          success: function (result) {
            console.log("resultresult", result)

            if (result && result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
              $("#erp-form-btn").prop('disabled', false);
              if (typeof decrementAttemptFormERP === 'function') { decrementAttemptFormERP(); }
            }
            else if (result && result.message == 'success') {
              console.log("done");
              toastr.success('Message Sent Successfully!!');
              $('#enterprise-form1')[0].reset();
              window.location = BASE_URL + `thank-you-enterprise?mob=${erpCountry}${erpContact}`;
            }
            //  Handle Duplicate Lead (Second time) - prefix here
            else if (result.message === "Relax! We've got your lead.") {
              // We use toastr.info or toastr.warning and show ONLY the server message
              toastr.error(result.message);
              $("#submit").prop('disabled', false);
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong: ' + (result ? (result.message || JSON.stringify(result)) : 'Unknown server error.'));
              $("#erp-form-btn").prop('disabled', false);
              if (typeof decrementAttemptFormERP === 'function') { decrementAttemptFormERP(); }
            }
          },
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission. ';
            if (status === 'parsererror') {
              errorMessage += 'Server returned invalid JSON. Check PHP output for accidental ECHO or WHITESPACE.';
            } else {
              errorMessage += 'Status: ' + status + ', Error: ' + error;
            }
            toastr.error(errorMessage);
            $("#erp-form-btn").prop('disabled', false);
            if (typeof decrementAttemptFormERP === 'function') { decrementAttemptFormERP(); }
          }
        });

      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred.');
        $("#erp-form-btn").prop('disabled', false);
        if (typeof decrementAttemptFormERP === 'function') { decrementAttemptFormERP(); }
      }

    }).catch(function (error) {
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptFormERP === 'function') {
        decrementAttemptFormERP();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#erp-form-btn").prop('disabled', false);
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

// new code for erp1 form button on page
$("#erp-form-btn1").click(function () {
  // 1. IMPORTANT: Add client-side rate limiting check at the start.
  if (typeof checkAndSetRateLimitFormERP1 === 'function' && !checkAndSetRateLimitFormERP1()) {
    return false;
  }

  $("#erp-form-btn1").prop('disabled', true);
  const errorMapForm = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var erpName1 = $("#erp-c-name1").val();
  var erpCompanyname1 = $("#erp-company-name1").val();
  var erpCleanedCompanyName1 = erpCompanyname1.trim().toUpperCase();
  var erpEmail1 = $("#erp-email1").val();
  var erpIndustry1 = "";
  var erpCountry1 = $(".erp-main .iti__selected-dial-code").text();
  var erpContact1 = $("#erp-c_phone1").val();
  var erpCity1 = $("#erp-c_city1").val();
  var plantype = " ";
  var acceptrules1 = $("#erp-acceptrules1").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var visitorurl = sessionStorage.getItem('refrerurl');
  var submiturl = submitUrl;

  // *** CRITICAL JS CHANGE: Define actionType for server check ***
  var actionType = 'erp_form_submit1';

  // Hash the phone number
  async function hashPhoneNumber(countryCode, phoneNumber) {
    const originalPhoneNumber = `+${countryCode}${phoneNumber}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(originalPhoneNumber);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  const cCode = erpCountry1;
  const cMnumber = erpContact1;

  hashPhoneNumber(cCode, cMnumber)
    .then(hashedPhoneNumber => {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'gtm.js',
        'phone_number': hashedPhoneNumber,
      });
      console.log('Hashed Phone Number:', hashedPhoneNumber);
    })
    .catch(error => console.error('Error:', error));

  // *** CRITICAL JS CHANGE: Append actionType to dataString ***
  var dataString = 'name=' + erpName1 + '&companyname=' + erpCompanyname1 + '&email=' + erpEmail1 + '&country=' + erpCountry1 + '&contact=' + erpContact1 + '&industry=' + erpIndustry1 + '&city=' + erpCity1 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submiturl=' + encodeURIComponent(submiturl) + '&actionType=' + actionType;

  // Assuming your form fields have IDs like name22, companyname22, email22, contact22, city22, and c_phone11
  $('#erpName1, #erpCompanyname1, #erpEmail1, #erpContact1, #erpCity1, #erp-c_phone1').on('keyup change', function () {
    var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if ($('#erp-c-name1').val().trim() !== '' &&
      $('#erp-company-name1').val().trim() !== '' &&
      $('#erp-email1').val().trim() !== '' &&
      $('#erp-c_phone1').val().trim() !== '' &&
      $('#erp-c_city1').val().trim() !== '' &&
      $('#erp-c_phone1').val().length === 10 &&
      emailRegex.test($('#erp-email1').val())) {

      $("#erp-form-btn1").prop('disabled', false);
    } else {
      $("#erp-form-btn1").prop('disabled', true);
    }
  });

  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var validationFailed = false;

  // --- Client-Side Validation Checks ---
  if (erpName1.trim() == '' || erpCompanyname1.trim() == '' || erpEmail1.trim() == '' || erpContact1.trim() == '' || erpCity1.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    validationFailed = true;
  }
  // Using global 'iti' instance as per the original erp-form-btn1 code
  else if (!iti.isValidNumber() && errorMapForm[iti.getValidationError()]) {
    toastr.error("Mobile number is " + errorMapForm[iti.getValidationError()]);
    validationFailed = true;
  }
  else if (!emailRegex.test(erpEmail1)) {
    toastr.error('Please enter a valid email address');
    validationFailed = true;
  }
  else if (typeof invalidbusinessname !== 'undefined' && invalidbusinessname.includes(erpCleanedCompanyName1)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    validationFailed = true;
  }


  if (validationFailed) {
    if (typeof decrementAttemptFormERP1 === 'function') {
      decrementAttemptFormERP1();
    }
    $("#erp-form-btn1").prop('disabled', false);
    return false;
  }

  // --- RECAPTCHA V3 IMPLEMENTATION START ---
  grecaptcha.ready(function () {
    // Execute reCAPTCHA with the specific action 'erp_form_submit1' (Client side is correct)
    grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'erp_form_submit1' }).then(function (token) {

      var recaptcha_response = token;
      var dataStringWithToken = dataString + '&recaptcha_response=' + recaptcha_response;

      toastr.info('Message Sending...');

      // --- AJAX CALL ---
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "requestdemomoblatest.php",
          data: dataStringWithToken,
          cache: false,
          dataType: "json",
          success: function (result) {
            console.log("resultresult", result)

            if (result && result.message && result.message.startsWith('error: rate-limit-exceeded|')) {
              const timeRemaining = result.message.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
              $("#erp-form-btn1").prop('disabled', false);
              if (typeof decrementAttemptFormERP1 === 'function') { decrementAttemptFormERP1(); }
            }
            else if (result && result.message == 'success') {
              console.log("done");
              toastr.success('Message Sent Successfully!!');
              $('#enterprise-form1')[0].reset();
              window.location = BASE_URL + `thank-you-enterprise?mob=${erpCountry1}${erpContact1}`;
            }
            //  Handle Duplicate Lead (Second time) - prefix here
            else if (result.message === "Relax! We've got your lead.") {
              // We use toastr.info or toastr.warning and show ONLY the server message
              toastr.error(result.message);
              $("#submit").prop('disabled', false);
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong: ' + (result ? (result.message || JSON.stringify(result)) : 'Unknown server error.'));
              $("#erp-form-btn1").prop('disabled', false);
              if (typeof decrementAttemptFormERP1 === 'function') { decrementAttemptFormERP1(); }
            }
          },
          error: function (xhr, status, error) {
            let errorMessage = 'Network error during submission. ';
            if (status === 'parsererror') {
              errorMessage += 'Server returned invalid JSON. Check PHP output for accidental ECHO or WHITESPACE.';
            } else {
              errorMessage += 'Status: ' + status + ', Error: ' + error;
            }
            toastr.error(errorMessage);
            $("#erp-form-btn1").prop('disabled', false);
            if (typeof decrementAttemptFormERP1 === 'function') { decrementAttemptFormERP1(); }
          }
        });

      } catch (error) {
        console.error('AJAX execution failed:', error);
        toastr.error('An unexpected error occurred during submission.');
        $("#erp-form-btn1").prop('disabled', false);
        if (typeof decrementAttemptFormERP1 === 'function') { decrementAttemptFormERP1(); }
      }

    }).catch(function (error) {
      console.error("reCAPTCHA execution failed:", error);
      if (typeof decrementAttemptFormERP1 === 'function') {
        decrementAttemptFormERP1();
      }
      toastr.error('Security verification failed. Please try again.');
      $("#erp-form-btn1").prop('disabled', false);
    });
  });
  // --- RECAPTCHA V3 IMPLEMENTATION END ---

  return false;
});

// new code for Download Brochure Form
$("#download-brochure").click(function () {
  $("#download-brochure").prop('disabled', true);
  var name22 = $("#c-name11").val();
  var companyname22 = $("#company-name11").val();
  var cleanedCompanyName22 = companyname22.trim();
  var email22 = $("#company-email11").val();
  var country22 = $(".pricing-form .iti__selected-dial-code").text();
  var contact22 = $("#c_phone11").val();
  var city22 = $("#c_city11").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules11").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var isBrochureDownload = "1";
  var visitorurl = sessionStorage.getItem('refrerurl');
  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);
  console.log('New SubmitURL ---> ', submitUrl);

  console.log("Country New >", country22)
  // The dataString definition is moved inside the recaptcha callback below.

  // Assuming your form fields have IDs like name22, companyname22, email22, contact22, city22, and c_phone11
  // NOTE: This .on('keyup change') handler runs on every change, but should ideally be separate from the submit handler. 
  // We'll leave the original logic flow untouched but comment on the redundancy here.
  $('#name22, #companyname22, #email22, #contact22, #city22, #c_phone11').on('keyup change', function () {
    // Check if all required fields are filled
    if ($('#name22').val().trim() !== '' &&
      $('#companyname22').val().trim() !== '' &&
      $('#email22').val().trim() !== '' &&
      $('#contact22').val().trim() !== '' &&
      $('#city22').val().trim() !== '' &&
      $('#c_phone11').val().length === 10 &&
      emailRegex.test($('#email22').val())) {

      // Enable the submit button if all fields are valid
      $("#download-brochure").prop('disabled', false);
    } else {
      // Disable the submit button if any field is invalid
      $("#download-brochure").prop('disabled', true);
    }
  });

  // Email validation regular expression
  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name22.trim() == '' || companyname22.trim() == '' || email22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    // Enable the submit button if any field is invalid
    $("#download-brochure").prop('disabled', false);
    return false;
  }
  else if (name22.length > 60 || companyname22.length > 60 || city22.length > 60) {
    toastr.error("You've entered too many characters");
    return false;
  }
  else if ($("#c_phone11").val().length !== 10) {
    toastr.error('Mobile no. should be 10 digit');
    // Enable the submit button if any field is invalid
    $("#download-brochure").prop('disabled', false);
    return false;
  } else if (!emailRegex.test(email22)) {
    toastr.error('Please enter a valid email address');
    // Enable the submit button if any field is invalid
    $("#download-brochure").prop('disabled', false);
    return false;
  } else if (otpverifiedmodal != 1) {
    toastr.error('Mobile no. should be verify');
    // Enable the submit button if any field is invalid
    $("#download-brochure").prop('disabled', false);
    return false;
  }
  else if (invalidbusinessname.includes(cleanedCompanyName22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    // Enable the submit button if any field is invalid
    $("#download-brochure").prop('disabled', false);
    return false;
  }
  else {
    // --- RECAPTCHA V3 IMPLEMENTATION START ---
    grecaptcha.ready(function () {
      // Replace 'YOUR_SITE_KEY' with your actual Site Key
      grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'brochure_download' }).then(function (token) {

        var recaptcha_response = token;

        // Reconstruct dataString to include the recaptcha token
        var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&isBrochureDownload=' + isBrochureDownload + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&recaptcha_response=' + recaptcha_response;

        toastr.info('Message Sending...');

        // Proceed with AJAX call now that the token is ready
        try {
          $.ajax({
            type: "POST",
            url: BASE_URL + "requestdownloadbrochure.php",
            data: dataString,
            cache: false,
            dataType: "json", // ADDED: Ensure jQuery parses the JSON
            success: function (response) {
              // response is now an object: { message: "...", success: true/false }

              if (response.success === true) {
                // 1. Handle PDF Download logic
                var downloadAnchor = document.createElement('a');
                downloadAnchor.href = "assets-new/images/ComboPricing.pdf";
                downloadAnchor.setAttribute("download", "ComboPricing.html");
                downloadAnchor.setAttribute("type", "application/octet-stream");
                downloadAnchor.setAttribute("target", "_blank");
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();

                toastr.success('Message Sent Successfully!!');
                $('#pricing-form1')[0].reset();
                window.location = BASE_URL + 'thanks-for-combo-inquiry';

              } else {
                // 2. Handle Errors (Rate Limit, Duplicate, or reCAPTCHA fail)
                if (response.message.startsWith('error: rate-limit-exceeded|')) {
                  const timeRemaining = response.message.split('|')[1];
                  toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds.');
                } else if (response.message === "Relax! We've got your lead.") {
                  toastr.error(response.message);
                } else {
                  toastr.error(response.message);
                }
                $("#download-brochure").prop('disabled', false);
              }
            },
            error: function () {
              toastr.error('Network error during submission.');
              $("#download-brochure").prop('disabled', false);
            }
          });

        } catch (error) {
          console.log(error);
          $("#download-brochure").prop('disabled', false);
        }
      });
    });
    // --- RECAPTCHA V3 IMPLEMENTATION END ---
  }
  return false;
});

// new code pricing pop up
$("#pricing-link").click(function () {
  $("#pricing-link").prop('disabled', true);
  var name22 = $("#p-name11").val();
  var companyname22 = $("#company-name112").val();
  var cleanedCompanyName22 = companyname22.trim();
  var email22 = $("#company-email112").val();
  var country22 = $(".pricing-form-new .iti__selected-dial-code").text();
  var contact22 = $("#c_phone112").val();
  var city22 = $("#c_city112").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules112").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  // var isBrochureDownload = "1";
  var visitorurl = sessionStorage.getItem('refrerurl');
  var submitUrl = window.location.href;
  sessionStorage.setItem('submitUrl', submitUrl);
  console.log('New SubmitURL ---> ', submitUrl);

  // pop soruce define value
  var striptype = "pricing";


  console.log("Country New >", country22)
  // var recaptchasresponse = $("#-response-1").val();

  // DataString definition is moved inside the recaptcha callback below.
  // var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&stripType=' + striptype;

  // Assuming your form fields have IDs like name22, companyname22, email22, contact22, city22, and c_phone112
  $('#name22, #companyname22, #email22, #contact22, #city22, #c_phone112').on('keyup change', function () {
    // Check if all required fields are filled
    if ($('#name22').val().trim() !== '' &&
      $('#companyname22').val().trim() !== '' &&
      $('#email22').val().trim() !== '' &&
      $('#contact22').val().trim() !== '' &&
      $('#city22').val().trim() !== '' &&
      $('#c_phone112').val().length === 10 &&
      emailRegex.test($('#email22').val())) {

      // Enable the submit button if all fields are valid
      $("#pricing-link").prop('disabled', false);
    } else {
      // Disable the submit button if any field is invalid
      $("#pricing-link").prop('disabled', true);
    }
  });

  // Email validation regular expression
  var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name22.trim() == '' || companyname22.trim() == '' || email22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    // Enable the submit button if any field is invalid
    $("#pricing-link").prop('disabled', false);
    return false;
  }
  else if (name22.length > 60 || companyname22.length > 60 || city22.length > 60) {
    toastr.error("You've entered too many characters");
    return false;
  }
  else if ($("#c_phone112").val().length !== 10) {
    toastr.error('Mobile no. should be 10 digit');
    // Enable the submit button if any field is invalid
    $("#pricing-link").prop('disabled', false);
    return false;
  } else if (!emailRegex.test(email22)) {
    toastr.error('Please enter a valid email address');
    // Enable the submit button if any field is invalid
    $("#pricing-link").prop('disabled', false);
    return false;
  } else if (otpverifiedmodal != 1) {
    toastr.error('Mobile no. should be verify');
    // Enable the submit button if any field is invalid
    $("#pricing-link").prop('disabled', false);
    return false;
  }
  else if (invalidbusinessname.includes(cleanedCompanyName22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    // Enable the submit button if any field is invalid
    $("#pricing-link").prop('disabled', false);
    return false;
  }
  else {
    // --- RECAPTCHA V3 IMPLEMENTATION START ---
    grecaptcha.ready(function () {
      // Replace 'YOUR_SITE_KEY' with your actual Site Key
      grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'contact_form' }).then(function (token) {

        // / --- The code you requested, adapted to the new ID ---
        const recaptchaId = 'recaptchaResponse2';

        if (document.getElementById(recaptchaId)) {
          document.getElementById(recaptchaId).value = token;
          console.log(`reCAPTCHA token set: ${token}`);
        }
        var recaptcha_response = token;

        // Reconstruct dataString to include the recaptcha token
        var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId + '&visitorUrl=' + encodeURIComponent(visitorurl) + '&submitedurl=' + encodeURIComponent(submitUrl) + '&stripType=' + striptype + '&recaptcha_response=' + recaptcha_response;

        toastr.info('Message Sending...');

        // Proceed with AJAX call now that the token is ready
        try {
          $.ajax({
            type: "POST",
            url: BASE_URL + "requestpricing.php",
            data: dataString,
            cache: false,
            success: function (result) {
              try {
                // Convert response to Object if it isn't one already
                var data = (typeof result === "object") ? result : JSON.parse(result);

                if (data.message === 'success') {
                  $('#pricing-form1')[0].reset();
                  toastr.success('Pricing Request Sent Successfully!');
                  window.location = 'https://pricing.vasy.ai/';
                }
                else if (data.message === "Relax! We've got your lead.") {
                  // This catches the duplicate and shows ONLY the clean message
                  toastr.error(data.message);
                  $("#pricing-link").prop('disabled', true);
                }
                else if (typeof data.message === 'string' && data.message.includes('rate-limit-exceeded')) {
                  const timeRemaining = data.message.split('|')[1] || '60';
                  toastr.error('Limit exceeded. Wait ' + timeRemaining + 's.');
                  $("#pricing-link").prop('disabled', false);
                }
                else {
                  // General error catch
                  toastr.error('Oops! ' + (data.message || 'Something went wrong'));
                  $("#pricing-link").prop('disabled', false);
                }
              } catch (e) {
                // Fallback for non-JSON success strings
                if (result.trim() === "success") {
                  toastr.success('Pricing Request Sent Successfully!');
                  window.location = 'https://pricing.vasy.ai/';
                } else {
                  toastr.error('Oops! Something Went Wrong: ' + result);
                  $("#pricing-link").prop('disabled', false);
                }
              }
            },
            error: function () {
              toastr.error('Network error during submission.');
              $("#pricing-link").prop('disabled', false);
            }
          });

        } catch (error) {
          console.log(error);
          $("#pricing-link").prop('disabled', false);
        }
      });
    });
    // --- RECAPTCHA V3 IMPLEMENTATION END ---
  }
  return false;
});

function checkmobile12(id) {
  if (BASE_URL == LIVE_URL) {
    var hasError = false;
    $.ajax({
      type: "GET",
      url: BASE_URL + "checkmobile.php?mobileNo=" + $("#" + id).val(),
      cache: false,
      success: function (result) {
        if (result.trim() == 1) {
          console.log("New Mobile!!");
          $('#sendotp-btn12').prop('disabled', false);
          $submitBtn.prop('disabled', false);
        } else {
          console.log("Mobile Already!!");
          $('#sendotp-btn12').prop('disabled', true);
          $submitBtn.prop('disabled', true);
          toastr.error("Relax! We've got your lead.");
          hasError = true;
        }
      },
      error: function () {
        toastr.error('An error occurred while checking the mobile number');
        hasError = true;
      },
      async: false
    });
    return hasError;
  }
  else {
    console.log("Testing Server");
  }
}

var otpcount = 0;
var editOtpButton1 = $('#editphone-btn12');

function sendotp12() {
  $("#sendotp-btn12").prop('disabled', true);
  var number = $("#c_phone112").val();


  if (number != null && number.length == 10) {

    var input = {
      "phone": number,

      "action": "send_otp"
    };

    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      data: input,
      cache: false,
      success: function (response) {
        if (response == "success") {
          toastr.success('OTP Sent Successfully!');
          console.log(response);
          $("#c_phone112").prop('disabled', true);
          $('#click-show12').removeClass('d-none');
          $('#sendotp-btn12').addClass('d-none');
          editOtpButton1.removeClass('d-none');
          otpcount += 1;

          // Check if edit OTP button should be disabled after 3 times
          if (otpcount >= 3) {
            editOtpButton1.prop("disabled", true);
            toastr.error('You can edit phone number 3 times only');
          }

          // Disable all send OTP buttons if the count reaches 3
          if (otpcount >= 3) {
            $("#sendotp-btn, #sendotp-btn12, #sendotp-btn2").prop("disabled", true);
          }
        } else {
          console.log("error");
        }
      },
      error: function () {
        toastr.error('An error occurred while sending OTP');
      }
    });
  } else {
    console.log("Please enter a valid number!");
    toastr.error('Please enter a valid number!');
    $("#sendotp-btn12").prop('disabled', false);
  }
}

function editphone12() {
  $("#sendotp-btn12").prop('disabled', false);
  $("#c_phone112").prop('disabled', false);
  $('#otp12').val("");
  $('#otp12').prop("disabled", false);
  $('#verifyotp-btn12').val('Verify');
  $('#verifyotp-btn12').prop("disabled", false);
  $('#click-show12').addClass('d-none');
  $('#editphone-btn12').addClass('d-none');
  $('#sendotp-btn12').removeClass('d-none');
}

function verifyotp12() {
  var otp = $("#otp12").val();
  var input = {
    "otp": otp,
    "action": "verify_otp"
  };
  if (otp != null && otp.length == 6) {
    $.ajax({
      url: BASE_URL + 'controller.php',
      type: 'POST',
      dataType: "json",
      data: input,
      cache: false,
      success: function (response) {
        $("." + response.type).html(response.message)
        $("." + response.type).show();
        if (response.type == "success") {
          toastr.success('OTP Verified Successfully!');
          $('#verifyotp-btn12').val('Verified');
          $('#verifyotp-btn12').prop("disabled", true);
          $("#otp12").prop('disabled', true);
          $('#editphone-btn12').attr("disabled");
          otpverifiedmodal = 1;
        } else if (response.type == "error") {
          toastr.error('Invalid OTP');
        } else {
          toastr.error('Something Went Wrong');
        }
      },
      error: function () {
        console.log("OTP Verification Failed!");
      }
    });
  } else {
    console.log("Please Enter OTP");
    toastr.error('Please Enter OTP');
  }
}

autoverifyotp12 = (e) => ($(e).val().length == 6) ? verifyotp12() : '';

$("#acceptrules1").on('change', function () {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }
});

// UAE PopUp submit
$("#uae-submit").click(function () {
  var name22 = $("#gcc-c-name1").val();
  var companyname22 = $("#gcc-company-name1").val();
  var email22 = $("#gcc-mail1").val();
  var country22 = "971";
  var contact22 = $("#gcc-c_phone1").val();
  var city22 = $("#gcc-c_city1").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules1").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId;
  if (name22.trim() == '' || companyname22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
    // } else if ($("#gcc-c_phone1").val().length !== 15) {
    //   toastr.error('Mobile no. should be 15 digit');
    //   return false;
  } else if (invalidbusinessname.includes(companyname22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    return false;
  } else {
    toastr.info('Message Sending...');
    try {
      $.ajax({
        type: "POST",
        url: BASE_URL + "gcc-schedule-your-demo-latest.php",
        data: dataString,
        cache: false,
        success: function (result) {
          if (result == 'success') {
            console.log("done");
            toastr.success('Message Sent Successfully!!');
            $('#contact-form1')[0].reset();
            window.location = BASE_URL + 'uae-thanks-for-schedule';
          } else {
            console.log("sorry");
            toastr.error('Oops! Something Went Wrong');
            $("#uae-submit").prop('disabled', false);
          }
          //alert(result);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }
  return false;
});

// Saudi Arabia PopUp submit
$("#saudiarabia-submit").click(function () {
  var name22 = $("#gcc-c-name1").val();
  var companyname22 = $("#gcc-company-name1").val();
  var email22 = $("#gcc-mail1").val();
  var country22 = "966";
  var contact22 = $("#gcc-c_phone1").val();
  var city22 = $("#gcc-c_city1").val();
  var plantype = " ";
  var acceptrules1 = $("#acceptrules1").val();
  var sessionId = smartlook.sessionId;
  var secretKey = "";
  var dataString = 'name=' + name22 + '&companyname=' + companyname22 + '&email=' + email22 + '&country=' + country22 + '&contact=' + contact22 + '&city=' + city22 + '&acceptrules=' + acceptrules1 + '&plantype=' + plantype + '&secretKey=' + secretKey + '&sessionId=' + sessionId;
  if (name22.trim() == '' || companyname22.trim() == '' || contact22.trim() == '' || city22.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
    // } else if ($("#gcc-c_phone1").val().length !== 15) {
    //   toastr.error('Mobile no. should be 15 digit');
    //   return false;
  } else if (invalidbusinessname.includes(companyname22)) {
    toastr.error('Sorry! Timing Slots Not Available.');
    return false;
  } else {
    toastr.info('Message Sending...');
    try {
      $.ajax({
        type: "POST",
        url: BASE_URL + "gcc-schedule-your-demo-latest.php",
        data: dataString,
        cache: false,
        success: function (result) {
          if (result == 'success') {
            console.log("done");
            toastr.success('Message Sent Successfully!!');
            $('#contact-form1')[0].reset();
            window.location = BASE_URL + 'saudi-arabia-thanks-for-schedule';
          } else {
            console.log("sorry");
            toastr.error('Oops! Something Went Wrong');
            $("#saudiarabia-submit").prop('disabled', false);
          }
          //alert(result);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }
  return false;
});

// new code Contact Page Form reCAPTCHA
$("#contact-button").click(function () {
  const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  var name2 = $("#c-name").val();
  var email2 = $("#c_email").val();
  var emailvalidation = /(\w+)\@(\w+)\.[a-zA-Z]/g;
  var testEmail = emailvalidation.test(email2);
  var cc = $(".contact-form .iti__selected-dial-code").text();
  var contact2 = $("#c_phone").val();
  var numvalidation = /^[0-9]+$/g;
  var testNumber = numvalidation.test(contact2);
  var companyname2 = $("#company-name").val();
  var subject2 = $("#c_subject").val();
  var message2 = $("#c_message").val();
  var sessionId = smartlook.sessionId;
  var secretkey = ""; // This is not needed here

  // NOTE: Added message2 check here to match your logic from the previous correct snippet
  if (name2.trim() == '' || email2.trim() == '' || contact2.trim() == '' || subject2.trim() == '' || message2.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
  } else if (!testEmail) {
    toastr.error("Invalid email");
  } else if (!iti.isValidNumber() && errorMap[iti.getValidationError()]) {
    toastr.error("Mobile number is " + errorMap[iti.getValidationError()]);
  } else {
    // --- RECAPTCHA V3 IMPLEMENTATION START ---
    grecaptcha.ready(function () {
      // Replace 'YOUR_SITE_KEY' with your actual Site Key
      grecaptcha.execute('6LefrvYrAAAAADrsLNOiR-dzHbeJpOdMjA6r4fX_', { action: 'contact_form' }).then(function (token) {

        // Set the token value to the hidden input
        document.getElementById('recaptchaResponse').value = token;

        // Reconstruct dataString to include the recaptcha token
        var recaptcha_response = token;
        var dataString = 'name=' + name2 + '&email=' + email2 + '&country=' + cc + '&contact=' + contact2 + '&companyname=' + companyname2 + '&subject=' + subject2 + '&message=' + message2 + '&sessionId=' + sessionId + '&recaptcha_response=' + recaptcha_response;

        toastr.info('Message Sending...');
        // Proceed with AJAX call now that the token is ready
        $.ajax({
          type: "POST",
          url: BASE_URL + "contact-form.php",
          data: dataString,
          cache: false,
          success: function (result) {
            // FIX: Define resultTrimmed here so it's available for all checks.
            var resultTrimmed = result.trim();

            if (resultTrimmed == 'success') {
              console.log("done");
              toastr.success('Message Sent Successfully!!');
              $('#contact-form')[0].reset();
              window.location = 'you-are-the-best.html';
            } else if (resultTrimmed.startsWith('error: rate-limit-exceeded|')) {
              // --- NEW RATE LIMIT ERROR HANDLING (CORRECT) ---
              const timeRemaining = resultTrimmed.split('|')[1];
              toastr.error('Submission limit exceeded. Please wait ' + timeRemaining + ' seconds before trying again.');
              $("#contact-button").prop('disabled', false);
            } else {
              console.log("sorry");
              // Handle other errors (reCAPTCHA, PHP, etc.)
              toastr.error('Oops! Something Went Wrong: ' + result);
              $("#contact-button").prop('disabled', false);
            }
          },
          error: function () {
            toastr.error('Network error during submission.');
            $("#contact-button").prop('disabled', false);
          }
        });
      });
    });
    // --- RECAPTCHA V3 IMPLEMENTATION END ---
  }
  return false;
});

// Newsletter Form
$("#newsletter-button").click(function () {
  var email = $("#email").val();
  var emailvalidation = /(\w+)\@(\w+)\.[a-zA-Z]/g;
  var testEmail = emailvalidation.test(email);
  var sessionId = smartlook.sessionId;
  var secretkey = "";
  var dataString = 'email=' + email + '&secretkey=' + secretkey + '&sessionId=' + sessionId;
  if (email.trim() == '') {
    toastr.error('Attention! Incomplete Form Detected');
    return false;
  } else if (!testEmail) {
    toastr.error("Invalid email");
  } else {
    toastr.info('Message Sending...');
    $.ajax({
      type: "POST",
      url: BASE_URL + "newsletter.php",
      data: dataString,
      cache: false,
      success: function (result) {
        if (result == 'success') {
          console.log("done");
          toastr.success('Message Sent Successfully!!');
          $('#newletter-form')[0].reset();
        } else {
          console.log("sorry");
          toastr.error('Oops! Something Went Wrong');
        }
      }
    });
  }
  return false;
});

//Whatsapp Form
function checkmobile2(id) {
  $.ajax({
    type: "GET",
    url: BASE_URL + "checkmobile.php?mobileNo=" + $("#" + id).val(),
    cache: false,
    success: function (result) {
      if (result.trim() == 1) {
        console.log("New Mobile!!");
        $('#sendotp-btn2').prop('disabled', false);
        $('#getstarted').prop('disabled', false);
      } else {
        console.log("Mobile Already!!");
        $('#sendotp-btn2').prop('disabled', true);
        $('#getstarted').prop('disabled', true);
        toastr.error("Relax! We've got your lead.");
      }
    }
  });
}

autoverifyotp2 = (e) => ($(e).val().length == 6) ? verifyotp2() : '';

//End Schedule a Demo Modal Form
var openpageflag = 0;
var openenterpriseflag = 0;
var openpartnerflag = 0;
var otpverified = 0;
var otpverifiedmodal = 0;
var otpverifiedwhatsapp = 0;

$(document).ready(function () {
  // Popup Timeout
  if (($.cookie("popup_1_2") == "undefined")) {
    $.cookie("popup_1_2", "1");
  }

  setTimeout(() => {
    $.removeCookie('popup_1_2');
  }, 300000);

  // Whatsapp Form Submit
  $("#getstarted").click(function () {
    $("#getstarted").prop('disabled', true);
    const errorMapWhatsapp = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    var wname = $("#w-name").val();
    var wcompanyname = $("#w-companyname").val();
    var cleanedWcompanyName = wcompanyname.trim();
    var wcc = $(".landing-form .iti__selected-dial-code").text();
    var wphone = $("#w-phone").val();
    var wcity = $("#w-city").val();
    var sessionId = smartlook.sessionId;
    var submitUrl = window.location.href;
    sessionStorage.setItem('submitUrl', submitUrl);
    console.log('New SubmitURL ---> ', submitUrl);
    // var recaptchasresponse = $("#-response-2").val();
    var dataString = 'wname=' + wname + '&wcompanyname=' + wcompanyname + '&wcountry=' + wcc + '&wcontact=' + wphone + '&wcity=' + wcity + '&sessionId=' + sessionId + '&submitedurl=' + encodeURIComponent(submitUrl);

    // Assuming your form fields have IDs like wname, wcompanyname, wphone, and wcity
    $('#wname, #wcompanyname, #wphone, #wcity').on('keyup change', function () {
      // Check if all required fields are filled
      if ($('#wname').val().trim() !== '' &&
        $('#wcompanyname').val().trim() !== '' &&
        $('#wphone').val().trim() !== '' &&
        $('#wcity').val().trim() !== '' &&
        $('#w-phone').val().length === 10) {

        // Enable the submit button if all fields are valid
        // Assuming your submit button has the ID 'whatsapp-submit'
        $("#getstarted").prop('disabled', false);
      } else {
        // Disable the submit button if any field is invalid
        $("#getstarted").prop('disabled', true);
      }
    });

    if (wname.trim() == '' || wcompanyname.trim() == '' || wphone.trim() == '' || wcity.trim() == '') {
      toastr.error('Attention! Incomplete Form Detected');
      // Disable the submit button if any field is invalid
      $("#getstarted").prop('disabled', false);
      return false;
    }
    else if (wname.length > 60 || wcompanyname.length > 60 || wcity.length > 60) {
      toastr.error("You've entered too many characters");
      return false;
    }

    else if (!itiWhatsapp.isValidNumber() && errorMapWhatsapp[itiWhatsapp.getValidationError()]) {
      toastr.error("Mobile number is " + errorMapWhatsapp[itiWhatsapp.getValidationError()]);
      $("#getstarted").prop('disabled', false);
      return false;
    }
    // else if (otpverifiedwhatsapp != 1) {
    //   toastr.error('Mobile no. should be verify');
    //   return false;
    // }
    else if (invalidbusinessname.includes(cleanedWcompanyName)) {
      toastr.error('Sorry! Timing Slots Not Available.');
      // Disable the submit button if any field is invalid
      $("#getstarted").prop('disabled', false);
      return false;
    }
    else {
      // toastr.info('Message Sending...');
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "whatsapp-form.php",
          data: dataString,
          cache: false,
          success: function (result) {
            if (result == 'success') {
              console.log("done");
              $('#whatsappmodal').modal('hide');
              toastr.success('Message Sent Successfully!!');
              $('#whatsapp-form').trigger("reset");
              $('#click-show2').addClass('d-none');
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong');
            }
          }
        });
        var whatsappmsg = "I am Interested in Scheduling a Demo with Vasy. I am " + wname + " from " + wcity + ". My business name is " + wcompanyname + "."
        var whatsAppHref = "https://api.whatsapp.com/send?phone=918140364036&text=" + whatsappmsg;
        window.open(whatsAppHref, '_blank');
      }
      catch (error) {
        toastr.error('Please Try Again Later!!');
      }
    }
    return false;
  });

  $("#getstarted1").click(function () {
    var wname = $("#w-name").val();
    var wcompanyname = $("#w-companyname").val();
    var cleanedWcompanyName = wcompanyname.trim();
    var wcc = "91";
    var wphone = $("#w-phone").val();
    var wcity = $("#w-city").val();
    var sessionId = smartlook.sessionId;
    var dataString = 'wname=' + wname + '&wcompanyname=' + wcompanyname + '&wcountry=' + wcc + '&wcontact=' + wphone + '&wcity=' + wcity + '&sessionId=' + sessionId;
    if (wname.trim() == '' || wcompanyname.trim() == '' || wphone.trim() == '' || wcity.trim() == '') {
      toastr.error('Attention! Incomplete Form Detected');
      return false;
    } else if ($("#w-phone").val().length !== 10) {
      toastr.error('Mobile no. should be 10 digit');
      return false;
    } else if (invalidbusinessname.includes(cleanedWcompanyName)) {
      toastr.error('Sorry! Timing Slots Not Available.');
      return false;
    } else {
      toastr.info('Message Sending...');
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "whatsapp-form.php",
          data: dataString,
          cache: false,
          success: function (result) {
            if (result == 'success') {
              console.log("done");
              $('#whatsappmodal').modal('hide');
              toastr.success('Message Sent Successfully!!');
              $('#whatsapp-form').trigger("reset");
              $('#click-show2').addClass('d-none');
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong');
            }
          }
        });
        var whatsappmsg = "I am Interested in Scheduling a Demo with Vasy. I am " + wname + " from " + wcity + ". My business name is " + wcompanyname + "."
        var whatsAppHref = "https://api.whatsapp.com/send?phone=918140364036&text=" + whatsappmsg;
        window.open(whatsAppHref, '_blank');
      }
      catch (error) {
        toastr.error('Please Try Again Later!!');
      }
    }
    return false;
  });
  // UAE Whatsapp Form Submit
  $("#gccgetstarted").click(function () {
    var wname = $("#gcc-w-name").val();
    var wcompanyname = $("#gcc-w-companyname").val();
    var wcc = "971";
    var wphone = $("#gcc-w-phone").val();
    var wcity = $("#gcc-w_city").val();
    var sessionId = smartlook.sessionId;
    var dataString = 'wname=' + wname + '&wcompanyname=' + wcompanyname + '&wcountry=' + wcc + '&wcontact=' + wphone + '&wcity=' + wcity + '&sessionId=' + sessionId;
    if (wname.trim() == '' || wcompanyname.trim() == '' || wphone.trim() == '' || wcity.trim() == '') {
      toastr.error('Attention! Incomplete Form Detected');
      return false;
      // } else if ($("#gcc-w-phone").val().length !== 15) {
      //   toastr.error('Mobile no. should be 15 digit');
      //   return false;
    } else if (invalidbusinessname.includes(wcompanyname)) {
      toastr.error('Sorry! Timing Slots Not Available.');
      return false;
    } else {
      toastr.info('Message Sending...');
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "gcc-whatsapp-form.php",
          data: dataString,
          cache: false,
          success: function (result) {
            if (result == 'success') {
              console.log("done");
              $('#gccwhatsappmodal').modal('hide');
              toastr.success('Message Sent Successfully!!');
              $('#gcc-whatsapp-form').trigger("reset");
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong');
            }
          }
        });
        var whatsappmsg = "I am Interested in Scheduling a Demo with Vasy. I am " + wname + " from " + wcity + ". My business name is " + wcompanyname + "."
        var whatsAppHref = "https://api.whatsapp.com/send?phone=918140364036&text=" + whatsappmsg;
        window.open(whatsAppHref, '_blank');
      }
      catch (error) {
        toastr.error('Please Try Again Later!!');
      }
    }
    return false;
  });

  // SAUDI Whatsapp Form Submit
  $("#gcc-get-started").click(function () {
    var wname = $("#gcc-w-name").val();
    var wcompanyname = $("#gcc-w-companyname").val();
    var wcc = "966";
    var wphone = $("#gcc-w-phone").val();
    var wcity = $("#gcc-w_city").val();
    var sessionId = smartlook.sessionId;
    var dataString = 'wname=' + wname + '&wcompanyname=' + wcompanyname + '&wcountry=' + wcc + '&wcontact=' + wphone + '&wcity=' + wcity + '&sessionId=' + sessionId;
    if (wname.trim() == '' || wcompanyname.trim() == '' || wphone.trim() == '' || wcity.trim() == '') {
      toastr.error('Attention! Incomplete Form Detected');
      return false;
      // } else if ($("#gcc-w-phone").val().length !== 15) {
      //   toastr.error('Mobile no. should be 15 digit');
      //   return false;
    } else if (invalidbusinessname.includes(wcompanyname)) {
      toastr.error('Sorry! Timing Slots Not Available.');
      return false;
    } else {
      toastr.info('Message Sending...');
      try {
        $.ajax({
          type: "POST",
          url: BASE_URL + "gcc-whatsapp-form.php",
          data: dataString,
          cache: false,
          success: function (result) {
            if (result == 'success') {
              console.log("done");
              $('#gccwhatsappmodal').modal('hide');
              toastr.success('Message Sent Successfully!!');
              $('#gcc-whatsapp-form').trigger("reset");
            } else {
              console.log("sorry");
              toastr.error('Oops! Something Went Wrong');
            }
          }
        });
        var whatsappmsg = "I am Interested in Scheduling a Demo with Vasy. I am " + wname + " from " + wcity + ". My business name is " + wcompanyname + "."
        var whatsAppHref = "https://api.whatsapp.com/send?phone=918140364036&text=" + whatsappmsg;
        window.open(whatsAppHref, '_blank');
      }
      catch (error) {
        toastr.error('Please Try Again Later!!');
      }
    }
    return false;
  });

  // Play Audio
  $('#play').click(function () {
    const audio = new Audio("assets-new/images/vasy-audio.mp3");
    audio.play();

    const icons = ['.fa-volume-off', '.fa-volume-down', '.fa-volume-up'];

    icons.forEach((icon, index) => {
      setTimeout(() => {
        $(icon).addClass('d-none');
        $(icons[(index + 1) % icons.length]).removeClass('d-none');
      }, 300 * index);
    });
  });

  //Input Regex
  function validateAlphabeticInput(input) {
    const inputValue = input.value;
    let regexPattern = /^[a-zA-Z]+(\s?[a-zA-Z]+)*$/;
    if (input.classList.contains('alphanumericRegex')) {
      regexPattern = /^[a-zA-Z0-9]+(\s?[a-zA-Z0-9]+)*$/;
    }
    if (input.classList.contains('alphabeticRegex') && !/^[a-zA-Z]*$/.test(inputValue)) {
      input.value = inputValue.replace(/[^a-zA-Z\s]/g, '').replace(/^\s/, '');
    } else if (!regexPattern.test(inputValue)) {
      input.value = inputValue.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^\s/, '');
    }
  }

  $('.numberonly').keypress(function (e) {
    var charCode = (e.which) ? e.which : event.keyCode
    if (String.fromCharCode(charCode).match(/[^0-9]/g))
      return false;
  });

  const alphabeticInputs = document.querySelectorAll('.alphabeticRegex, .alphanumericRegex');
  alphabeticInputs.forEach(function (input) {

    input.addEventListener("input", function (event) {
      validateAlphabeticInput(event.target);
    });
  });

  //Client Logo Infinite Scroll
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        if (index === '0') {
          something();
        } else if (index === '1') {
          something1();
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  const trialElements = $('.scrollanimations');
  trialElements.each((i, el) => {
    const index = el.dataset.index;
    observer.observe(el);
  });

  // Navbar Menu Hover
  $('.navbar-brand, .href').attr('href', BASE_URL);

  $(document).ready(function () {
    $(".solution-link").mouseenter(function () {
      var targetId = $(this).data("target");
      hideAllMenus();
      $("#" + targetId).addClass('d-block').removeClass('d-none');
    });

    $(".solution-link").mouseleave(function () {
      hideAllMenus();
      $("#solutionmenu1").addClass('d-block').removeClass('d-none');
      $("#aboutmenu1").addClass('d-block').removeClass('d-none');
    });

    function hideAllMenus() {
      var menuIds = ["solutionmenu1", "solutionmenu2", "solutionmenu3", "solutionmenu4", "solutionmenu5", "solutionmenu6", "solutionmenu7", "aboutmenu1", "aboutmenu2", "aboutmenu4", "aboutmenu3", "aboutmenu5"];
      menuIds.forEach(function (menuId) {
        $("#" + menuId).addClass('d-none').removeClass('d-block');
      });
    }
  });
  // End Navbar Menu Hover

  // strat industries on click menu image
  $(document).ready(function () {
    $(".industries-link").click(function () {
      var targetId = $(this).data("target");
      hideAllMenus();
      $("#" + targetId).addClass('d-block').removeClass('d-none');
    });

    function hideAllMenus() {
      var menuIds = ["industries1", "industries2", "industries3"];
      menuIds.forEach(function (menuId) {
        $("#" + menuId).addClass('d-none').removeClass('d-block');
      });
    }
  });

  // end industries on click menu image
  $('#client-carousel,#contact-client').slick({
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    cssEase: 'linear',

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('#testimonial-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.client-testimonial').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    adaptiveHeight: false,
    variableWidth: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>'
  });
  $('.kp#business-sliders2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });
  $('#business-sliders').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });
  // perks and benefits
  $('#ourpeople').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });

  $('#ourcultural').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });


  $('#industries-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left text-brand" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right text-brand"></i></div>',
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#integration-carousel,#integration-carousel2').slick({
    vertical: true,
    verticalSwiping: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2
      }
    }]
  });

  $('#emp-testimonial').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(".new").slick({
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    autoplay: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(".emp-testimonials").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1
      }
    }]
  });

  var slidertest = $('.why-vasy-video').slick({
    // centerMode: true,
    // centerPadding: '30px',
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: false,
    autoplaySpeed: 3000,
    verticalSwiping: true,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
  });

  slidertest.slick('refresh');

  $('.slide').on('click', function () {
    var index = $(this).data('index');
    $('.slider').slick('slickGoTo', index);
  });

  $(".video-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>'
  });

  $(".festival-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#festival-sliderss').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(window).on('load', function () {
    if ($('#benefit-slider').hasClass('slick-initialized')) {
      $('#benefit-slider').slick('unslick');
    }

    $('#benefit-slider').slick({
      centerMode: true,
      centerPadding: '8px',
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  $('#keyfeatures').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#image-slider').on('init', function () {
    $('.image-slider-title').css('opacity', 1);
    $('.carousel-image').css('opacity', 1);
  }).slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(window).on('load resize', function () {
    var $slider = $('#super-slider-new');

    if ($(window).width() < 992) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          centerMode: true,
          responsive: [
            {
              breakpoint: 520,
              settings: {
                speed: 500,
                slidesToShow: 1
              }
            }
          ]
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  });


  $('#business-sliders-lp').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [
      {
        breakpoint: 520, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      },
      {
        breakpoint: 767, // Tablets and small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992, // Small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });



  $('#solution-features-mob').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#solution-slide').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // pos new slide for desktop and mobile
  $('#solution-slider').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        speed: 1000,
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });

  $('#pos-software').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#industries').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 290,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#mobile-solution').slick({
    centerMode: true,
    centerPadding: '80px',
    speed: 1000,
    loop: true,
    slidesToShow: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 0
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 290,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#multibranch-items,#multibranch-items-two').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#vasy-gold-slide').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1
      }
    }]
  });


  $('#supermarket-software-new').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#partner-mobile').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#supermarket-software').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#benefit-slider1').slick({
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left customArrow"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right customArrow"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('#super-slider').slick({
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  var slickSettingsClientsReview = {
    centerMode: false,
    centerPadding: '8px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-right"></i></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  };

  // Initialize both keyfeatures, solution-features-mob carousels using the same settings object
  $('#client-slider-new, #client-slider-new2').slick(slickSettingsClientsReview);

  // Video Modal Close
  $('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
  });

  // Investor Relation Documents
  if (window.sessionStorage.getItem('investorverify') == '1') {
    $('.notice-document').addClass('d-none');
    $('.auth-document').removeClass('d-none');
  }

  // Cookie
  $('#cookies-btn').on('click', function (e) {
    $('#cookie').addClass('d-none');
    $.cookie("viewed_cookie_policy", "1");
  });

  if (($.cookie("viewed_cookie_policy") == "1")) {
    $('#cookie').addClass('d-none');
  }
});

var slider = $('#integration-carousel2');
var initialDelay = 3000;

setTimeout(function () {
  slider.slick("slickPlay");
}, initialDelay);

$(function () {
  var $ul = $('.sidebar-navigation > ul');

  $ul.find('li a').click(function (e) {
    var $li = $(this).parent();

    if ($li.find('ul').length > 0) {
      e.preventDefault();

      if ($li.hasClass('selected')) {
        $li.removeClass('selected').find('li').removeClass('selected');
        $li.find('ul').slideUp(400);
        $li.find('a em').removeClass('mdi-flip-v');
      } else {

        if ($li.parents('li.selected').length == 0) {
          $ul.find('li').removeClass('selected');
          $ul.find('ul').slideUp(400);
          $ul.find('li a em').removeClass('mdi-flip-v');
        } else {
          $li.parent().find('li').removeClass('selected');
          $li.parent().find('> li ul').slideUp(400);
          $li.parent().find('> li a em').removeClass('mdi-flip-v');
        }

        $li.addClass('selected');
        $li.find('>ul').slideDown(400);
        $li.find('>a>em').addClass('mdi-flip-v');
      }
    }
  });


  $('.sidebar-navigation > ul ul').each(function (i) {
    if ($(this).find('>li>ul').length > 0) {
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft = parseInt(paddingLeft);
      var result = pIntPLeft + 20;

      $(this).find('>li>a').css('padding-left', result);
    } else {
      var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
      var pIntPLeft = parseInt(paddingLeft);
      var result = pIntPLeft + 20;

      $(this).find('>li>a').css('padding-left', result).parent().addClass('selected--last');
    }
  });

  var t = ' li > ul ';
  for (var i = 1; i <= 10; i++) {
    $('.sidebar-navigation > ul > ' + t.repeat(i)).addClass('subMenuColor' + i);
  }

  var activeLi = $('li.selected');
  if (activeLi.length) {
    opener(activeLi);
  }

  function opener(li) {
    var ul = li.closest('ul');
    if (ul.length) {

      li.addClass('selected');
      ul.addClass('open');
      li.find('>a>em').addClass('mdi-flip-v');

      if (ul.closest('li').length) {
        opener(ul.closest('li'));
      } else {
        return false;
      }

    }
  }

});

$('.mobile-menu .btn').click(function () {
  $('.sidebar-navigation').toggleClass('active');
  $('.mobile-menu .btn').toggleClass('close');
});

$('.state-menus ul li a').click(function () {
  $('.state-menus').removeClass('active');
  $('.mobile-menu .btn').removeClass('close');
});

var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      $(function () {
        $('#client-lists').infiniteslide({
          'speed': 50,
          'direction': 'up',
          'pauseonhover': true,
          'responsive': false,
          'clone': 1
        });
      });
    }
  };
})();

var something1 = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      $(function () {
        $('#slides').infiniteslide({
          'speed': 50,
          'direction': 'left',
          'pauseonhover': true,
          'responsive': false,
          'clone': 1
        });
      });
    }
  };
})();

// Video Modal Start
function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

function openVideo(src) {
  $('#video-overlay').addClass('open');
  $("#video-overlay").append(`<iframe style="width:885px;height:498px;" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
}

$('#play-video1').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/Lk5t5ctOy0g');
});

$('#play-video2').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/epH2bZwQs3A');
});

$('#why-video1').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/d4SqGH4P-W8');
});

$('#why-video2').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/sFsWWR2jJqA');
});

$('#gcc-play-client-video').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/Alq6iychPMw');
});

$('#play-client-video1,#rsp-play-client-video1').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/smMMmwhLBNQ');
});
$('#play-client-video1m,#rsp-play-client-video1m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/smMMmwhLBNQ');
});

$('#play-client-video2,#rsp-play-client-video2,#play-client-video2m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/udLjoysmCAQ');
});
$('#play-client-video2m,#rsp-play-client-video2m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/udLjoysmCAQ');
});

$('#play-client-video3,#rsp-play-client-video3').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/HNBAM16G-EA');
});
$('#play-client-video3m,#rsp-play-client-video3m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/HNBAM16G-EA');
});

$('#play-client-video4,#rsp-play-client-video4').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/G91xpUvnG-w');
});
$('#play-client-video4m,#rsp-play-client-video4m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/G91xpUvnG-w');
});

$('#play-client-video5,#rsp-play-client-video5').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/O3vJra9oT0g');
});
$('#play-client-video5m,#rsp-play-client-video5m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/O3vJra9oT0g');
});

$('#play-client-video6,#rsp-play-client-video6').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/EpPJV1WN8FA');
});
$('#play-client-video6m,#rsp-play-client-video6m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/EpPJV1WN8FA');
});

$('#play-client-video07,#play-client-video07m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/1AbDuOd_LR8?si=grKNQlyirt7pIRTo');
});

$('#play-client-video08,#play-client-video08m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/ytAntLIDHTM?si=8hc2F1LUt_OlLvPm');
});

$('#play-client-video7').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/-6yZKOhxANk');
});

$('#play-client-video8').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/WbqqrwwgXy4');
});

$('#play-client-video9').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/bfz3LKLenWg');
});

$('#play-client-video10').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/rNx8ysFEDCQ');
});

$('#play-client-video11').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/QheMhToGc_I');
});

$('#play-client-video12').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/gORLwF4FRao');
});

$('#play-client-video13').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/quSPOztPCZE?si=6tHlgUnLxuWyTTI9');
});

$('#play-client-video14').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/1AbDuOd_LR8?si=g_Fi9AzrRGgldec4');
});
$('#play-client-video15, #play-client-video15m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/bfz3LKLenWg?');
});
$('#play-client-video16, #play-client-video16m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/EpPJV1WN8FA?');
});

$('#play-client-video17').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/QheMhToGc_I?');
});

$('#play-client-video18').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/HNBAM16G-EA?');
});
$('#play-client-video19, #play-client-video19m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/G91xpUvnG-w?');
});
$('#play-client-video20, #play-client-video20m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/quSPOztPCZE?');
});
// keyur
$('#play-client-video21').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/smMMmwhLBNQ?si=jZnV4KqBSrepor0e');
});
$('#play-client-video22').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/xp8dXbsvNt8?si=rsyCHHbHSCwYMpyM');
});
$('#play-client-video23 , #play-client-video023').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/xp8dXbsvNt8?si=voQuyLAaQ5YJxlkv');
});
$('#play-client-video24 , #play-client-video024').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/2yQ9zfo7P6A?si=-L_auf3rVIyG3y0W');
});
$('#play-client-video-iscon-gathiya-podcast').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/fJKISlu-rYk?si=YGHQ-fiO2xsR0KGg');
});
$('#play-vina-video').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/GIM-gHMHbt8?si=KL4cVzem9ALFVilm');
});
$('#play-vina-video1').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/jCQ5gGa197c?si=dm3q38t6lD2jV8yT');
});
$('#play-client-video25 , #play-client-video025').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/7GywUrEoLhs?si=0bkmPZdHdudyTto1');
});
$('#play-client-video26').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/lfBsGFiW_Mg');
});
$('#play-client-video26ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/18SX1cABa3A?si=gqp3clCVIb62VQcr');
});
$('#play-client-video27').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/A5R3b7puu-0?si=f3nrUdwe8WMTe6fN');
});
$('#play-client-video28').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/s5Rgus_gBWo?si=y4PjGaO8RkUHrrno');
});
$('#play-client-video28ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/hSBY6I88h14?si=rxm0Fitw3R7b8lcb');
});
$('#play-client-video29').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/SJZFDO0qtb4?si=rsahnKBHYYCunLKI');
});
$('#play-client-video29ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/nwpyxjQC52Q?si=VwEE6R9yTnbm5ldx');
});
$('#play-client-video30').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/oux5cyRpZLA?si=xQTi2xJaumdQZTI4');
});
$('#play-client-video30ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/rg_V9rE9xY4?si=lZ51ZNP2z8tZQ8W9');
});
$('#play-client-video31').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/TPN1PdlngyA?si=eC1Tu_dRvFE2vjqz');
});
$('#play-client-video31ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/JOg4IHuu8Mc?si=wiI5rqpceNR4PFMC');
});
$('#play-client-video32,#play-client-video32m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/BU4U4HG_MK0?si=aSIpUQZBwXbkNq_1');
});
$('#play-client-video33,#play-client-video33m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/wp_KTTPuayA?si=kXLmtveVef96SAjX');
});
$('#play-client-video34').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/3dqheN7VkhI?si=GnUuO9ESI3yDfoag');
});
$('#play-client-video35').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/18SX1cABa3A?si=-lsBt7GKM5zkkEoT');
});
$('#play-client-video36').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/uROicfrYoNI?si=40UHYDq4HVcF_i89');
});
$('#play-client-video37').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/s5Rgus_gBWo?si=sPPujXoERZsb1jzW');
});
$('#play-client-video37ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/hSBY6I88h14?si=YIDwO7zNW_fcsRb_');
});
$('#play-client-video38').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/KHm8iFmvNlg?si=AGZ9eSHM33Hok73I');
});
$('#play-client-video38ms').on('click', function (e) {
  e.preventDefault();
  openVideo('https://youtube.com/embed/wV-pjptuH_g?si=oDLILZ5T5F-nhgw-');
});
$('#play-client-video39').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/OIq8VpM_BEY?si=zBZvPR-Lp9yG_fkm');
});
$('#play-client-video40').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/txkxS7Z7AN0?si=bAntrmJgkpS2rl9x');
});
$('#play-client-video41').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/gyCIWXumv8o?si=gUW_UdK_H02uEdd8');
});
$('#play-client-video42, #play-client-video42m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/cvNxtqWuAXo?si=Hcs76V6-1wqg8EPy');
});
$('#play-client-video43, #play-client-video43m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/wHX-u_uvnD8?si=ylgt1Irw84hW6Pz6');
});
$('#play-client-video44, #play-client-video44m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/mgjzjpecubA?si=N4Oqo9f8OF78ohen');
});
$('#play-client-video45, #play-client-video45m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/dKakvfb6W1w?si=8SaurRCPn4DgBAxs');
});
$('#play-client-video46, #play-client-video46m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/8QVLClxi-FE?si=5gK8a6XFcHFMT-_p');
});
$('#play-client-video47, #play-client-video47m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/XpAM5jgAoEk?si=jnn1acQyq2qwdxD0');
});
$('#play-client-video48, #play-client-video48m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/grFeRRmBpxA?si=9mvbIa88LJBrXLJA');
});
$('#play-client-video49, #play-client-video49m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/9M_zu4X1OXI?si=WYGoOyK-g1wQ8XkI');
});
$('#play-client-video50, #play-client-video50m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/NG_Wc2_MVWQ?si=CTfwgAm96Z8_ZPo3');
});
$('#play-client-video51, #play-client-video51m').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/GZkZwyIijgc?si=z7nDiovD7BGYNMW9');
});

$('#pos-solutions').on('click', function (e) {
  e.preventDefault();
  openVideo('https://www.youtube.com/embed/EpPJV1WN8FA');
});

$(".video-play-button, .video-play-buttons, #play-video1, #play-video2").click(function () {
  $("#video-overlay iframe")[0].src += "?autoplay=1";
});


// Video Modal End

// Client Testimonials
/*!
 * Feature Carousel, Version 1.3
 * http://www.bkosolutions.com
 *
 * Copyright 2011 Brian Osborne
 * Licensed under GPL version 3
 * brian@bkosborne.com
 *
 * http://www.gnu.org/licenses/gpl.txt
 */

(function ($) {

  $.fn.featureCarousel = function (options) {

    // Adds support for multiple carousels on one page
    if (this.length > 1) {
      this.each(function () {
        $(this).featureCarousel(options);
      });
      return this;
    }

    // override the default options with user defined options
    options = $.extend({}, $.fn.featureCarousel.defaults, options || {});

    /* These are universal values that are used throughout the plugin. Do not modify them
     * unless you know what you're doing. Most of them feed off the options
     * so most customization can be achieved by modifying the options values */
    var pluginData = {
      currentCenterNum: options.startingFeature,
      containerWidth: 0,
      containerHeight: 0,
      largeFeatureWidth: 0,
      largeFeatureHeight: 0,
      smallFeatureWidth: 0,
      smallFeatureHeight: 0,
      totalFeatureCount: $(this).children("div").length,
      currentlyMoving: false,
      featuresContainer: $(this),
      featuresArray: [],
      containerIDTag: "#" + $(this).attr("id"),
      timeoutVar: null,
      rotationsRemaining: 0,
      itemsToAnimate: 0,
      borderWidth: 0
    };

    /**
     * Function to preload the images in the carousel if desired.
     * This is not recommended if there are a lot of images in the carousel because
     * it may take a while. Functionality does not depend on preloading the images
     */
    var preload = function (callback) {
      // user may not want to preload images
      if (options.preload == true) {
        var $imageElements = pluginData.featuresContainer.find("img");
        var loadedImages = 0;
        var totalImages = $imageElements.length;

        $imageElements.each(function (index, element) {
          // Attempt to load the images					
          var img = new Image();
          $(img).bind('load error', function () {
            // Add to number of images loaded and see if they are all done yet
            loadedImages++;
            if (loadedImages == totalImages) {
              // All done, perform callback
              callback();
            }
          });

          img.src = element.src;
        });
      } else {
        // if user doesn't want preloader, then just go right to callback
        callback();
      }
    }

    // Gets the feature container based on the number
    var getContainer = function (featureNum) {
      return pluginData.featuresArray[featureNum - 1];
    }

    // get a feature given it's set position (the position that doesn't change)
    var getBySetPos = function (position) {
      $.each(pluginData.featuresArray, function () {
        if ($(this).data().setPosition == position)
          return $(this);
      });
    }

    // get previous feature number
    var getPreviousNum = function (num) {
      if ((num - 1) == 0) {
        return pluginData.totalFeatureCount;
      } else {
        return num - 1;
      }
    }

    // get next feature number
    var getNextNum = function (num) {
      if ((num + 1) > pluginData.totalFeatureCount) {
        return 1;
      } else {
        return num + 1;
      }
    }

    /**
     * Because there are several options the user can set for the width and height
     * of the feature images, this function is used to determine which options were set
     * and to set the appropriate dimensions used for a small and large feature
     */
    var setupFeatureDimensions = function () {
      // Set the height and width of the entire carousel container
      pluginData.containerWidth = pluginData.featuresContainer.width();
      pluginData.containerHeight = pluginData.featuresContainer.height();

      // Grab the first image for reference
      var $firstFeatureImage = $(pluginData.containerIDTag).find(".carousel-image:first");

      // Large Feature Width
      if (options.largeFeatureWidth > 1)
        pluginData.largeFeatureWidth = options.largeFeatureWidth;
      else if (options.largeFeatureWidth > 0 && options.largeFeatureWidth < 1)
        pluginData.largeFeatureWidth = $firstFeatureImage.width() * options.largeFeatureWidth;
      else
        pluginData.largeFeatureWidth = $firstFeatureImage.outerWidth();
      // Large Feature Height
      if (options.largeFeatureHeight > 1)
        pluginData.largeFeatureHeight = options.largeFeatureHeight;
      else if (options.largeFeatureHeight > 0 && options.largeFeatureHeight < 1)
        pluginData.largeFeatureHeight = $firstFeatureImage.height() * options.largeFeatureHeight;
      else
        pluginData.largeFeatureHeight = $firstFeatureImage.outerHeight();
      // Small Feature Width
      if (options.smallFeatureWidth > 1)
        pluginData.smallFeatureWidth = options.smallFeatureWidth;
      else if (options.smallFeatureWidth > 0 && options.smallFeatureWidth < 1)
        pluginData.smallFeatureWidth = $firstFeatureImage.width() * options.smallFeatureWidth;
      else
        pluginData.smallFeatureWidth = $firstFeatureImage.outerWidth() / 2;
      // Small Feature Height
      if (options.smallFeatureHeight > 1)
        pluginData.smallFeatureHeight = options.smallFeatureHeight;
      else if (options.smallFeatureHeight > 0 && options.smallFeatureHeight < 1)
        pluginData.smallFeatureHeight = $firstFeatureImage.height() * options.smallFeatureHeight;
      else
        pluginData.smallFeatureHeight = $firstFeatureImage.outerHeight() / 2;
    }

    /**
     * Function to take care of setting up various aspects of the carousel,
     * most importantly the default positions for the features
     */
    var setupCarousel = function () {
      // Set the total feature count to the amount the user wanted to cutoff
      if (options.displayCutoff > 0 && options.displayCutoff < pluginData.totalFeatureCount) {
        pluginData.totalFeatureCount = options.displayCutoff;
      }

      // fill in the features array
      pluginData.featuresContainer.find(".carousel-feature").each(function (index) {
        if (index < pluginData.totalFeatureCount) {
          pluginData.featuresArray[index] = $(this);
        }
      });

      // Determine the total border width around the feature if there is one
      if (pluginData.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth") != "medium") {
        pluginData.borderWidth = parseInt(pluginData.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth")) * 2;
      }

      // Place all the features in a center hidden position to start off
      pluginData.featuresContainer
        // Have to make the container relative positioning
        .find(".carousel-feature").each(function () {
          // Center all the features in the middle and hide them
          $(this).css({
            'left': (pluginData.containerWidth / 2) - (pluginData.smallFeatureWidth / 2) - (pluginData.borderWidth / 2),
            'width': pluginData.smallFeatureWidth,
            'height': pluginData.smallFeatureHeight,
            'top': options.smallFeatureOffset + options.topPadding,
            'opacity': 0
          });
        })
        // Set all the images to small feature size
        .find(".carousel-image").css({
          'width': pluginData.smallFeatureWidth
        });

      // set position to relative of captions if displaying below image
      if (options.captionBelow) {
        pluginData.featuresContainer.find('.carousel-caption').css('position', 'relative');
      }

      // figure out number of items that will rotate each time
      if (pluginData.totalFeatureCount < 4) {
        pluginData.itemsToAnimate = pluginData.totalFeatureCount;
      } else {
        pluginData.itemsToAnimate = 4;
      }

      // Hide story info and set the proper positioning
      pluginData.featuresContainer.find(".carousel-caption")
        .hide();
    }

    /**
     * Here all the position data is set for the features.
     * This is an important part of the carousel to keep track of where
     * each feature within the carousel is
     */
    var setupFeaturePositions = function () {
      // give all features a set number that won't change so they remember their
      // original order
      $.each(pluginData.featuresArray, function (i) {
        $(this).data('setPosition', i + 1);
      });

      // Go back one - This is done because we call the move function right away, which
      // shifts everything to the right. So we set the current center back one, so that
      // it displays in the center when that happens
      var oneBeforeStarting = getPreviousNum(options.startingFeature);
      pluginData.currentCenterNum = oneBeforeStarting;

      // Center feature will be position 1
      var $centerFeature = getContainer(oneBeforeStarting);
      $centerFeature.data('position', 1);

      // Everything before that center feature...
      var $prevFeatures = $centerFeature.prevAll();
      $prevFeatures.each(function (i) {
        $(this).data('position', (pluginData.totalFeatureCount - i));
      });

      // And everything after that center feature...
      var $nextFeatures = $centerFeature.nextAll();
      $nextFeatures.each(function (i) {
        if ($(this).data('setPosition') != undefined) {
          $(this).data('position', (i + 2));
        }
      });

      // if the counter style is for including number tags in description...
      if (options.counterStyle == 'caption') {
        $.each(pluginData.featuresArray, function () {
          var pos = getPreviousNum($(this).data('position'));
          var $numberTag = $("<span></span>");
          $numberTag.addClass("numberTag");
          $numberTag.html("(" + pos + " of " + pluginData.totalFeatureCount + ") ");
          $(this).find('.carousel-caption p').prepend($numberTag);
        });
      }
    }

    /**
     * This function will set up the two different types of trackers used
     */
    var setupTrackers = function () {
      if (options.trackerIndividual) {
        // construct the tracker list
        var $list = $("<ul></ul>");
        $list.addClass("tracker-individual-container");
        for (var i = 0; i < pluginData.totalFeatureCount; i++) {
          // item position one plus the index
          var counter = i + 1;

          // Build the DOM for the tracker list
          var $trackerBlip = $("<div>" + counter + "</div>");
          $trackerBlip.addClass("tracker-individual-blip");
          $trackerBlip.css("cursor", "pointer");
          $trackerBlip.attr("id", "tracker-" + (i + 1));
          var $listEntry = $("<li></li>");
          $listEntry.append($trackerBlip);
          $listEntry.css("float", "left");
          $listEntry.css("list-style-type", "none");
          $list.append($listEntry);
        }
        // add the blip list and then make sure it's visible
        $(pluginData.containerIDTag).append($list);
        $list.hide().show();
      }

      if (options.trackerSummation) {
        // Build the tracker div that will hold the tracking data
        var $tracker = $('<div></div>');
        $tracker.addClass('tracker-summation-container');
        // Collect info in spans
        var $current = $('<span></span>').addClass('tracker-summation-current').text(options.startingFeature);
        var $total = $('<span></span>').addClass('tracker-summation-total').text(pluginData.totalFeatureCount);
        var $middle = $('<span></span>').addClass('tracker-summation-middle').text(' of ');
        // Add it all together
        $tracker.append($current).append($middle).append($total);
        // Insert into DOM
        $(pluginData.containerIDTag).append($tracker);
      }
    }

    // Update the tracker information with the new centered feature
    var updateTracker = function (oldCenter, newCenter) {
      if (options.trackerIndividual) {
        // get selectors for the two trackers
        var $trackerContainer = pluginData.featuresContainer.find(".tracker-individual-container");
        var $oldCenter = $trackerContainer.find("#tracker-" + oldCenter);
        var $newCenter = $trackerContainer.find("#tracker-" + newCenter);

        // change classes
        $oldCenter.removeClass("tracker-individual-blip-selected");
        $newCenter.addClass("tracker-individual-blip-selected");
      }

      if (options.trackerSummation) {
        var $trackerContainer = pluginData.featuresContainer.find('.tracker-summation-container');
        $trackerContainer.find('.tracker-summation-current').text(newCenter);
      }
    }

    /**
     * This function will set the autoplay for the carousel to
     * automatically rotate it given the time in the options
     * pass in TRUE to just clear the timer
     */
    var setTimer = function (stop) {
      // clear the timeout var if it exists
      clearTimeout(pluginData.timeoutVar);

      // set interval for moving if autoplay is set
      if (!stop && options.autoPlay != 0) {
        var autoTime = (Math.abs(options.autoPlay) < options.carouselSpeed) ? options.carouselSpeed : Math.abs(options.autoPlay);
        pluginData.timeoutVar = setTimeout(function () {
          (options.autoPlay > 0) ? initiateMove(true, 1) : initiateMove(false, 1);
        }, autoTime);
      }
    }


    // This is a helper function for the animateFeature function that
    // will update the positions of all the features based on the direction
    var rotatePositions = function (direction) {
      $.each(pluginData.featuresArray, function () {
        var newPos;
        if (direction == false) {
          newPos = getNextNum($(this).data().position);
        } else {
          newPos = getPreviousNum($(this).data().position);
        }
        $(this).data('position', newPos);
      });
    }

    /**
     * This function is used to animate the given feature to the given
     * location. Valid locations are "left", "right", "center", "hidden"
     */
    var animateFeature = function ($feature, direction) {
      var new_width, new_height, new_top, new_left, new_zindex, new_padding, new_fade;

      // Determine the old and new positions of the feature
      var oldPosition = $feature.data('position');
      var newPosition;
      if (direction == true)
        newPosition = getPreviousNum(oldPosition);
      else
        newPosition = getNextNum(oldPosition);

      // callback for moving out of center pos
      if (oldPosition == 1) {
        options.leavingCenter($feature);
      }

      // Caculate new new css values depending on where the feature will be located
      if (newPosition == 1) {
        new_width = pluginData.largeFeatureWidth;
        new_height = pluginData.largeFeatureHeight;
        new_top = options.topPadding;
        new_zindex = $feature.css("z-index");
        new_left = (pluginData.containerWidth / 2) - (pluginData.largeFeatureWidth / 2) - (pluginData.borderWidth / 2);
        new_fade = 1.0;
      } else {
        new_width = pluginData.smallFeatureWidth;
        new_height = pluginData.smallFeatureHeight;
        new_top = options.smallFeatureOffset + options.topPadding;
        new_zindex = 1;
        new_fade = 0.4;
        // some info is different for the left, right, and hidden positions
        // left
        if (newPosition == pluginData.totalFeatureCount) {
          new_left = options.sidePadding;
          // right
        } else if (newPosition == 2) {
          new_left = pluginData.containerWidth - pluginData.smallFeatureWidth - options.sidePadding - pluginData.borderWidth;
          // hidden
        } else {
          new_left = (pluginData.containerWidth / 2) - (pluginData.smallFeatureWidth / 2) - (pluginData.borderWidth / 2);
          new_fade = 0;
        }
      }
      // This code block takes care of hiding the feature information if the feature is leaving the center
      if (oldPosition == 1) {
        // Slide up the story information
        $feature.find(".carousel-caption")
          .hide();
      }

      // Animate the feature div to its new location
      $feature
        .animate(
          {
            width: new_width,
            height: new_height,
            top: new_top,
            left: new_left,
            opacity: new_fade
          },
          options.carouselSpeed,
          options.animationEasing,
          function () {
            // Take feature info out of hiding if new position is center
            if (newPosition == 1) {
              // need to set the height to auto to accomodate caption if displayed below image
              if (options.captionBelow)
                $feature.css('height', 'auto');
              // fade in the feature information
              $feature.find(".carousel-caption")
                .fadeTo("fast", 0.85);
              // callback for moved to center
              options.movedToCenter($feature);
            }
            // decrement the animation queue
            pluginData.rotationsRemaining = pluginData.rotationsRemaining - 1;
            // have to change the z-index after the animation is done
            $feature.css("z-index", new_zindex);
            // change trackers if using them
            if (options.trackerIndividual || options.trackerSummation) {
              // just update the tracker once; once the new center feature has arrived in center
              if (newPosition == 1) {
                // figure out what item was just in the center, and what item is now in the center
                var newCenterItemNum = pluginData.featuresContainer.find(".carousel-feature").index($feature) + 1;
                var oldCenterItemNum;
                if (direction == false)
                  oldCenterItemNum = getNextNum(newCenterItemNum);
                else
                  oldCenterItemNum = getPreviousNum(newCenterItemNum);
                // now update the trackers
                updateTracker(oldCenterItemNum, newCenterItemNum);
              }
            }

            // did all the the animations finish yet?
            var divide = pluginData.rotationsRemaining / pluginData.itemsToAnimate;
            if (divide % 1 == 0) {
              // if so, set moving to false...
              pluginData.currentlyMoving = false;
              // change positions for all items...
              rotatePositions(direction);

              // and move carousel again if queue is not empty
              if (pluginData.rotationsRemaining > 0)
                move(direction);
            }

            // reset timer and auto rotate again
            setTimer(false);
          }
        )
        // select the image within the feature
        .find('.carousel-image')
        // animate its size down
        .animate({
          width: new_width,
          height: new_height
        },
          options.carouselSpeed,
          options.animationEasing)
        .end();
    }

    /**
     * move the carousel to the left or to the right. The features that
     * will move into the four positions are calculated and then animated
     * rotate to the RIGHT when direction is TRUE and
     * rotate to the LEFT when direction is FALSE
     */
    var move = function (direction) {
      // Set the carousel to currently moving
      pluginData.currentlyMoving = true;

      // Obtain the new feature positions based on the direction that the carousel is moving
      var $newCenter, $newLeft, $newRight, $newHidden;
      if (direction == true) {
        // Shift features to the left
        $newCenter = getContainer(getNextNum(pluginData.currentCenterNum));
        $newLeft = getContainer(pluginData.currentCenterNum);
        $newRight = getContainer(getNextNum(getNextNum(pluginData.currentCenterNum)));
        $newHidden = getContainer(getPreviousNum(pluginData.currentCenterNum));
        pluginData.currentCenterNum = getNextNum(pluginData.currentCenterNum);
      } else {
        $newCenter = getContainer(getPreviousNum(pluginData.currentCenterNum));
        $newLeft = getContainer(getPreviousNum(getPreviousNum(pluginData.currentCenterNum)));
        $newRight = getContainer(pluginData.currentCenterNum);
        $newHidden = getContainer(getNextNum(pluginData.currentCenterNum));
        pluginData.currentCenterNum = getPreviousNum(pluginData.currentCenterNum);
      }

      // The z-index must be set before animations take place for certain movements
      // this makes the animations look nicer
      if (direction) {
        $newLeft.css("z-index", 3);

      } else {
        $newRight.css("z-index", 3);

      }
      $newLeft.children().children().css("font-size", "12px")
      $newRight.children().children().css("font-size", "12px")
      $newCenter.css("z-index", 4);
      $newCenter.children().children().css("font-size", "20px")

      // Fire moving to center event
      options.movingToCenter($newCenter);

      // Animate the features into their new positions
      animateFeature($newLeft, direction);
      animateFeature($newCenter, direction);
      animateFeature($newRight, direction);
      // Only want to animate the "hidden" feature if there are more than three
      if (pluginData.totalFeatureCount > 3) {
        animateFeature($newHidden, direction);
      }
    }

    // This is used to relegate carousel movement throughout the plugin
    // It will only initiate a move if the carousel isn't currently moving
    // It will set the animation queue to the number of rotations given
    var initiateMove = function (direction, rotations) {
      if (pluginData.currentlyMoving == false) {
        var queue = rotations * pluginData.itemsToAnimate;
        pluginData.rotationsRemaining = queue;
        move(direction);
      }
    }

    /**
     * This will find the shortest distance to travel the carousel from
     * one position to another position. It will return the shortest distance
     * in number form, and will be positive to go to the right and negative for left
     */
    var findShortestDistance = function (from, to) {
      var goingToLeft = 1, goingToRight = 1, tracker;
      tracker = from;
      // see how long it takes to go to the left
      while ((tracker = getPreviousNum(tracker)) != to) {
        goingToLeft++;
      }

      tracker = from;
      // see how long it takes to to to the right
      while ((tracker = getNextNum(tracker)) != to) {
        goingToRight++;
      }

      // whichever is shorter
      return (goingToLeft < goingToRight) ? goingToLeft * -1 : goingToRight;
    }

    // Move to the left if left button clicked
    $(options.leftButtonTag).on('click', function () {
      initiateMove(false, 1);
    });

    // Move to right if right button clicked
    $(options.rightButtonTag).on('click', function () {
      initiateMove(true, 1);
    });

    // These are the click and hover events for the features
    pluginData.featuresContainer.find(".carousel-feature")
      .click(function () {
        var position = $(this).data('position');
        if (position == 2) {
          initiateMove(true, 1);
        } else if (position == pluginData.totalFeatureCount) {
          initiateMove(false, 1);
        }
      })
      .mouseover(function () {
        if (pluginData.currentlyMoving == false) {
          var position = $(this).data('position');
          if (position == 2 || position == pluginData.totalFeatureCount) {
            $(this).css("opacity", 0.8);
          }
        }
        // pause the rotation?
        if (options.pauseOnHover) setTimer(true);
        // stop the rotation?
        if (options.stopOnHover) options.autoPlay = 0;
      })
      .mouseout(function () {
        if (pluginData.currentlyMoving == false) {
          var position = $(this).data('position');
          if (position == 2 || position == pluginData.totalFeatureCount) {
            $(this).css("opacity", 0.4);
          }
        }
        // resume the rotation
        if (options.pauseOnHover) {
          setTimer(false);
        }
      });

    // Add event listener to all clicks within the features container
    // This is done to disable any links that aren't within the center feature
    $("a", pluginData.containerIDTag).on("click", function (event) {
      // travel up to the container
      var $parents = $(this).parentsUntil(pluginData.containerIDTag);
      // now check each of the feature divs within it
      $parents.each(function () {
        var position = $(this).data('position');
        // if there are more than just feature divs within the container, they will
        // not have a position and it may come back as undefined. Throw these out
        if (position != undefined) {
          // if any of the links on a feature OTHER THAN the center feature were clicked,
          // initiate a carousel move but then throw the link action away
          if (position != 1) {
            if (position == pluginData.totalFeatureCount) {
              initiateMove(false, 1);
            } else if (position == 2) {
              initiateMove(true, 1);
            }
            event.preventDefault();
            return false;
            // if the position WAS the center (i.e. 1), fire callback
          } else {
            options.clickedCenter($(this));
          }
        }
      });
    });

    // Did someone click one of the individual trackers?
    $(".tracker-individual-blip", pluginData.containerIDTag).on("click", function () {
      // grab the position # that was clicked
      var goTo = $(this).attr("id").substring(8);
      // find out where that feature # actually is in the carousel right now
      var whereIsIt = pluginData.featuresContainer.find(".carousel-feature").eq(goTo - 1).data('position');
      // which feature # is currently in the center
      var currentlyAt = pluginData.currentCenterNum;
      // if the tracker was clicked for the current center feature, do nothing
      if (goTo != currentlyAt) {
        // find the shortest distance to move the carousel
        var shortest = findShortestDistance(1, whereIsIt);
        // initiate a move in that direction with given number of rotations
        if (shortest < 0) {
          initiateMove(false, (shortest * -1));
        } else {
          initiateMove(true, shortest);
        }
      }

    });

    /****************
     PUBLIC FUNCTIONS 
     ****************/
    this.initialize = function () {
      // Call the preloader and pass in our callback, which is just a slew of function calls
      // that should only be executed after the images have been loaded
      preload(function () {
        setupFeatureDimensions();
        setupCarousel();
        setupFeaturePositions();
        setupTrackers();
        initiateMove(true, 1);
      });

      return this;
    };

    this.next = function () {
      initiateMove(true, 1);
    }
    this.prev = function () {
      initiateMove(false, 1);
    }
    this.pause = function () {
      setTimer(true);
    }
    this.start = function () {
      setTimer(false);
    }

    // Initialize the plugin
    return this.initialize();
  };

  $.fn.featureCarousel.defaults = {
    // If zero, take original width and height of image
    // If between 0 and 1, multiply by original width and height (acts as a percentage)
    // If greater than one, use as a forced width/height for all of the images
    largeFeatureWidth: 0,
    largeFeatureHeight: 0,
    smallFeatureWidth: .5,
    smallFeatureHeight: .5,
    // how much to pad the top of the carousel
    topPadding: 0,
    // spacing between the sides of the container
    sidePadding: 50,
    // the additional offset to pad the side features from the top of the carousel
    smallFeatureOffset: 50,
    // indicates which feature to start the carousel at
    startingFeature: 1,
    // speed in milliseconds it takes to rotate the carousel
    carouselSpeed: 1000,
    // time in milliseconds to set interval to autorotate the carousel
    // set to zero to disable it, negative to go left
    autoPlay: 4000,
    // with autoplay enabled, set this option to true to have the carousel pause rotating
    // when a user hovers over any feature
    pauseOnHover: true,
    // with autoplay enabled, set this option to completely stop the autorotate functionality
    // when a user hovers over any feature
    stopOnHover: false,
    // numbered blips can appear and be used to track the currently centered feature, as well as 
    // allow the user to click a number to move to that feature. Set to false to not process these at all
    // and true to process and display them
    trackerIndividual: true,
    // a summation of the features can also be used to display an "x Of y" style of tracking
    // this can be combined with the above option as well
    trackerSummation: true,
    // true to preload all images in the carousel before displaying anything. If this is set to false,
    // you will probably need to set a fixed width/height to prevent strangeness
    preload: true,
    // Will only display this many features in the carousel
    // set to zero to disable
    displayCutoff: 0,
    // an easing can be specified for the animation of the carousel
    animationEasing: 'swing',
    // selector for the left arrow of the carousel
    leftButtonTag: '#carousel-lefts',
    // selector for the right arrow of the carousel
    rightButtonTag: '#carousel-rights',
    // display captions below the image instead of on top
    captionBelow: false,
    // callback function for when a feature has animated to the center
    movedToCenter: $.noop,
    // callback function for when feature left center
    leavingCenter: $.noop,
    // callback function for when center feature was clicked
    clickedCenter: $.noop,
    // callback function for when a feature has start moving to center
    movingToCenter: $.noop
  };

})(jQuery);

if ($(window).width() < 767) {
  //initialized
  var carousel = $("#client-slider").featureCarousel({
    autoPlay: 0,
    trackerIndividual: false,
    trackerSummation: false,
    smallFeatureWidth: .6,
    smallFeatureHeight: .6,
    topPadding: 0,
    bottomPadding: 500,

    sidePadding: 0,
    smallFeatureOffset: 37,
    carouselSpeed: 500,
    leftButtonTag: '#carousel-lefts',
    rightButtonTag: '#carousel-rights'
  });
}
else if ($(window).width() > 992 && $(window).width() <= 1024) {
  //initialized
  var carousel = $("#client-slider").featureCarousel({
    autoPlay: 0,
    trackerIndividual: false,
    trackerSummation: false,
    smallFeatureWidth: .6,
    smallFeatureHeight: .6,
    topPadding: 0,
    sidePadding: 0,
    smallFeatureOffset: 72,
    carouselSpeed: 500,
    leftButtonTag: '#carousel-lefts',
    rightButtonTag: '#carousel-rights'
  });
}
else if ($(window).width() > 767 && $(window).width() < 991) {
  //initialized
  var carousel = $("#client-slider").featureCarousel({
    autoPlay: 0,
    trackerIndividual: false,
    trackerSummation: false,
    smallFeatureWidth: .6,
    smallFeatureHeight: .6,
    topPadding: 0,
    sidePadding: 0,
    smallFeatureOffset: 58,
    carouselSpeed: 500,
    leftButtonTag: '#carousel-lefts',
    rightButtonTag: '#carousel-rights'
  });
}
else {
  //initialized
  var carousel = $("#client-slider").featureCarousel({
    autoPlay: 0,
    trackerIndividual: false,
    trackerSummation: false,
    smallFeatureWidth: .6,
    smallFeatureHeight: .6,
    topPadding: 0,
    sidePadding: 0,
    smallFeatureOffset: 100,
    carouselSpeed: 500,
    leftButtonTag: '#carousel-lefts',
    rightButtonTag: '#carousel-rights'
  });
}

// Search Box Expand
$('.search-box').click(function () {
  $('.input-box').toggleClass('open');
});

$('.input-box input').on('keydown', function (event) {
  if (event.keyCode === 32) {
    event.preventDefault();
  }
});

function searchbyname(ele) {
  const filter = ele.value.toLowerCase();
  const slider = $('#business-sliders');

  // If input empty → just reset
  if (filter.trim() === "") {
    resetSearchBusiness();
    return;
  }

  // Always clear old filters first
  slider.slick('slickUnfilter');

  // Apply new filter
  slider.slick('slickFilter', function () {
    let content = $(this).find("h6").text().toLowerCase();
    return content.indexOf(filter) > -1;
  });

  // Show "No results" if nothing matches
  const noResultsMessage = slider.find('.no-results');
  if (slider.find('.slick-slide:not(.slick-cloned):visible').length === 0) {
    if (noResultsMessage.length === 0) {
      slider.append('<div class="no-results">No results found.</div>');
    }
  } else {
    noResultsMessage.remove();
  }
}

function searchbyname1(ele) {
  const filter = ele.value.toLowerCase();
  const slider = $('#business-sliders-lp');

  // Always unfilter first
  slider.slick('slickUnfilter');

  // If input is empty → just reset everything
  if (filter.trim() === "") {
    slider.find('.no-results').remove();
    slider.slick('refresh'); // important to redraw all slides
    return;
  }

  // Apply filter
  slider.slick('slickFilter', function () {
    let content = $(this).find("h6").text().toLowerCase();
    return content.indexOf(filter) > -1;
  });

  // Check if visible slides exist
  const noResultsMessage = slider.find('.no-results');
  if (slider.find('.slick-slide:not(.slick-cloned):visible').length === 0) {
    if (noResultsMessage.length === 0) {
      slider.append('<div class="no-results">No results found.</div>');
    }
  } else {
    noResultsMessage.remove();
  }
}


// Features Scroll
var containerss = $('.feature-design .col-lg-9');

function features1() {
  $("a").removeClass("active animated flipInX");
  $("#featurebtn1").addClass("active animated flipInX");
  var scrollTo = $("#section1");
  var position = scrollTo.offset().top - containerss.offset().top + containerss.scrollTop();
  containerss.animate({
    scrollTop: position
  });
}

function features2() {
  $("a").removeClass("active animated flipInX");
  $("#featurebtn2").addClass("active animated flipInX");
  var scrollTo = $("#section2");
  var position = scrollTo.offset().top - containerss.offset().top + containerss.scrollTop();
  containerss.animate({
    scrollTop: position
  });
}

function features3() {
  $("a").removeClass("active animated flipInX");
  $("#featurebtn3").addClass("active animated flipInX");
  var scrollTo = $("#section3");
  var position = scrollTo.offset().top - containerss.offset().top + containerss.scrollTop();
  containerss.animate({
    scrollTop: position
  });
}

function features4() {
  $("a").removeClass("active animated flipInX");
  $("#featurebtn4").addClass("active animated flipInX");
  var scrollTo = $("#section4");
  var position = scrollTo.offset().top - containerss.offset().top + containerss.scrollTop();
  containerss.animate({
    scrollTop: position
  });
}

function features5() {
  $("a").removeClass("active animated flipInX");
  $("#featurebtn5").addClass("active animated flipInX");
  var scrollTo = $("#section5");
  var position = scrollTo.offset().top - containerss.offset().top + containerss.scrollTop();
  containerss.animate({
    scrollTop: position
  });
}

$("#section1").hover(function () {
  $("#featurebtn1").addClass("active animated flipInX");
  $("#featurebtn2").removeClass("active animated flipInX");
  $("#featurebtn3").removeClass("active animated flipInX");
  $("#featurebtn4").removeClass("active animated flipInX");
  $("#featurebtn5").removeClass("active animated flipInX");
});

$("#section2").hover(function () {
  $("#featurebtn2").addClass("active animated flipInX");
  $("#featurebtn1").removeClass("active animated flipInX");
  $("#featurebtn3").removeClass("active animated flipInX");
  $("#featurebtn4").removeClass("active animated flipInX");
  $("#featurebtn5").removeClass("active animated flipInX");
});

$("#section3").hover(function () {
  $("#featurebtn3").addClass("active animated flipInX");
  $("#featurebtn1").removeClass("active animated flipInX");
  $("#featurebtn2").removeClass("active animated flipInX");
  $("#featurebtn4").removeClass("active animated flipInX");
  $("#featurebtn5").removeClass("active animated flipInX");
});

$("#section4").hover(function () {
  $("#featurebtn4").addClass("active animated flipInX");
  $("#featurebtn1").removeClass("active animated flipInX");
  $("#featurebtn2").removeClass("active animated flipInX");
  $("#featurebtn3").removeClass("active animated flipInX");
  $("#featurebtn5").removeClass("active animated flipInX");

});

$("#section5").hover(function () {
  $("#featurebtn5").addClass("active animated flipInX");
  $("#featurebtn1").removeClass("active animated flipInX");
  $("#featurebtn2").removeClass("active animated flipInX");
  $("#featurebtn3").removeClass("active animated flipInX");
  $("#featurebtn4").removeClass("active animated flipInX");
});

// $('.collapse').on('shown.bs.collapse', function (e) {
//   var $card = $(this).closest('div#features-items .accordion-item');
//   var $open = $($(this).data('parent')).find('.collapse.show');

//   var additionalOffset = 110;
//   if ($card.prevAll().filter($open.closest('div#features-items .accordion-item')).length !== 0) {
//     additionalOffset = $open.height();
//   }
//   $('html,body').animate({
//     scrollTop: $card.offset().top - additionalOffset
//   }, 0);
// });

// Solutions Image Animation
function setActiveKey(keyNumber) {
  for (let i = 1; i <= 4; i++) {
    const keySelector = `#key${i}`;
    const animSelector = `#solutions-anim-${i}`;

    $(keySelector).toggleClass("active", i === keyNumber);
    $(animSelector).toggleClass("d-block", i === keyNumber).toggleClass("d-none", i !== keyNumber);
  }
}

$("#key1").click(function () {
  setActiveKey(1);
});

$("#key2").click(function () {
  setActiveKey(2);
});

$("#key3").click(function () {
  setActiveKey(3);
});

$("#key4").click(function () {
  setActiveKey(4);
});


// Everything Section Image Animation
function setActiveTab(tabId, textId, animId) {
  const $tab = $(tabId);
  const $text = $(textId);
  const $anim = $(animId);

  $tab.addClass("active");
  // $text.addClass("text-primary-dark");
  $anim.addClass("d-block").removeClass("d-none");

  const $otherTabs = $("[id^='one']").not(tabId);
  const $otherTexts = $("[id^='text']").not(textId);
  const $otherAnims = $("[id^='everything-anim']").not(animId);

  $otherTabs.removeClass("active");
  $otherTexts.removeClass("text-primary-dark");
  $otherAnims.removeClass("d-block").addClass("d-none");
}

$("#one1").click(function () {
  setActiveTab("#one1", "#text-1", "#everything-anim-1");
});

$("#one2").click(function () {
  setActiveTab("#one2", "#text-2", "#everything-anim-2");
});

$("#one3").click(function () {
  setActiveTab("#one3", "#text-3", "#everything-anim-3");
});

$("#one4").click(function () {
  setActiveTab("#one4", "#text-4", "#everything-anim-4");
});

$("#one5").click(function () {
  setActiveTab("#one5", "#text-5", "#everything-anim-5");
});

$("#one6").click(function () {
  setActiveTab("#one6", "#text-6", "#everything-anim-6");
});

// Merchants New Animation
function initializeSplide(elementId, direction) {
  let splides = $(`#${elementId}`);
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      perPage: 8,
      arrows: false,
      pagination: false,
      focus: "center",
      direction: direction,
      gap: "1.5rem",
      type: "loop",
      autoScroll: {
        autoStart: true,
        speed: 0.5
      },
      intersection: {
        inView: {
          autoScroll: true
        },
        outView: {
          autoScroll: false
        }
      },
      breakpoints: {
        1320: { perPage: 8 },
        1080: { perPage: 6 },
        992: { perPage: 4 },
        780: { perPage: 3 }
      }
    }).mount(window.splide.Extensions);
  }
}
// End Merchants New Animation

document.addEventListener('DOMContentLoaded', function () {
  // Function to clean input by removing non-numeric characters
  function cleanInput(inputElement) {
    inputElement.value = inputElement.value.replace(/\D/g, '');
  }

  // Function to handle paste event for input fields
  function handlePaste(e) {
    // Prevent the default paste behavior
    e.preventDefault();

    // Get the text from the clipboard
    const clipboardData = e.clipboardData.getData('text');

    // Remove any non-numeric characters from the clipboard data
    const numericInput = clipboardData.replace(/\D/g, '');

    // Set the input field value to the cleaned clipboard data
    e.target.value = numericInput;
  }

  // Function to validate the mobile number (customize this according to your requirements)
  function isValidMobileNumber(mobileNumber) {
    // You can implement your own validation logic here
    // For example, you might want to check the length or format
    return /^\d{10}$/.test(mobileNumber); // Assuming a 10-digit format
  }

  // Get references to the input fields
  const mobileNumberInput = document.getElementById('c_phone');
  const mobileNumberInput2 = document.getElementById('c_phone1');
  const mobileNumberInput3 = document.getElementById('w-phone');

  // Add event listeners for paste and input validation for the first input field
  if (mobileNumberInput) {
    mobileNumberInput.addEventListener('paste', handlePaste);
    mobileNumberInput.addEventListener('input', function () {
      cleanInput(mobileNumberInput);
    });
  }


  // Add event listeners for paste and input validation for the second input field
  // if (mobileNumberInput2) {
  mobileNumberInput2.addEventListener('paste', handlePaste);
  mobileNumberInput2.addEventListener('input', function () {
    cleanInput(mobileNumberInput2);
  });
  // }


  // Add event listeners for paste and input validation for the second input field
  if (mobileNumberInput3) {
    mobileNumberInput3.addEventListener('paste', handlePaste);
    mobileNumberInput3.addEventListener('input', function () {
      cleanInput(mobileNumberInput3);
    });
  }
});

// Features Code
function insertItemsIntoDOM(arr) {
  // Get the target container where you want to insert the items
  const targetContainer = document.getElementById('desktop-industries');

  // Loop through the items array and create HTML for each item
  arr.forEach(item => {
    // Create a new item container div
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('col-lg-4', 'col-md-6', 'col-4');

    // Set the inner HTML for the item container
    itemDiv.innerHTML = `
                    <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="${item.imgSrc}" alt="${item.imgAlt}" class="img-fluid mb-3">
                                <h4 class="text-primary-dark fw-bold text-center">${item.heading}</h4>
                            </div>
                            <div class="flip-card-back">
                                <img src="${item.imgSrc}" alt="${item.imgAlt}" class="img-fluid mb-3">
                                <h4 class="text-primary-dark fw-bold text-center">${item.heading}</h4>
                                <p class="fs-6 text-center">${item.paragraph}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    `;

    // Append the item container to the target container
    targetContainer.appendChild(itemDiv);
  });
}

// New Header changes
const dynamicText = document.querySelector('.dynamic-text');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

function slideWords() {
  currentIndex = (currentIndex + 1) % items.length;
  const translateYValue = -currentIndex * items[0]?.offsetHeight;
  if (dynamicText) {
    dynamicText.style.transform = `translateY(${translateYValue}px)`;
  }

}

setInterval(slideWords, 2000); // Change the interval time as per your preference


$(document).ready(function () {
  // Check if the element with ID 'contact-form' exists on the page
  if (!$('.contact-form').length && !$('.jobform').length && !$('.vendorform').length) {
    // Function to handle Ctrl + V (paste) shortcut
    $(document).keydown(function (event) {
      if (event.ctrlKey && (event.which == 86 || event.which == 118)) {
        toastr.error("Sorry, you can't paste here.");
        event.preventDefault();
      }
    });
  }
});

// intigration new 
// $(document).ready(function(){
//   $(".nav-links").click(function(){
//       var tabId = parseInt($(this).data("id"));
//       var pairedTabId = tabId % 2 === 0 ? tabId - 1 : tabId + 1;

//       $(".nav-links").removeClass("active");
//       $(".payment-arrow").removeClass("active");
//       $(".tab-pane-integration").removeClass("active "); // Remove '' class to hide old content

//       $(".nav-links[data-id='" + tabId + "'], .nav-links[data-id='" + pairedTabId + "']").addClass("active");
//       $(".payment-arrow[data-id='" + tabId + "'], .payment-arrow[data-id='" + pairedTabId + "']").addClass("active");
//       $("#content" + tabId + ", #content" + pairedTabId).addClass("active "); //  both tabs
//   });
// });
$(document).ready(function () {
  $(".nav-links").click(function () {
    var tabId = parseInt($(this).data("id"));
    var pairedTabId = tabId % 2 === 0 ? tabId - 1 : tabId + 1;

    $(".nav-links").removeClass("active");
    $(".payment-arrow").removeClass("active");
    $(".tab-pane-integration").removeClass("active");

    $(".nav-links[data-id='" + tabId + "'], .nav-links[data-id='" + pairedTabId + "']").addClass("active");
    $(".payment-arrow[data-id='" + tabId + "'], .payment-arrow[data-id='" + pairedTabId + "']").addClass("active");
    $(".tab-pane-integration[data-content-id='content" + tabId + "'], .tab-pane-integration[data-content-id='content" + pairedTabId + "']").addClass("active");
  });
});

// retails page scroll section


// features carousel billing page
$('#features-carousel').slick({
  speed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  cssEase: 'linear',

  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }]
});

// smart billing 
const tabToImageMap = {
  'tab-fast': 'tab-img-fast',
  'tab-omni': 'tab-img-omni',
  'tab-auto': 'tab-img-auto',
  'tab-report': 'tab-img-report'
};

const allImages = document.querySelectorAll('.solutions-animations img');

document.querySelectorAll('#smartBillingTabs button[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', function () {
    // Hide all images
    allImages.forEach(img => img.classList.add('d-none'));

    // Show the image associated with the active tab
    const imageId = tabToImageMap[tab.id];
    if (imageId) {
      document.getElementById(imageId).classList.remove('d-none');
    }
  });
});
// image versioning
// window.addEventListener('load', () => {
//   const images = document.querySelectorAll('img');

//   images.forEach(img => {
//     const src = img.getAttribute('src');

//     // Remove any existing ?v= query
//     const cleanSrc = src.replace(/(\?|&)v=\d+/, '').split('?')[0];

//     // Generate a random version number (timestamp or random)
//     const randomVersion = Math.floor(Math.random() * 1000000);

//     // Append new version
//     const newSrc = cleanSrc + (cleanSrc.includes('?') ? '&' : '?') + 'v=' + randomVersion;

//     img.setAttribute('src', newSrc);
//   });
// });

/**
 * Global Initialize for Industry Slider
 * Splits first 9 cards into a grid and the rest into a Slick carousel
 */
const initGlobalIndustrySlider = () => {
  const containerId = 'desktop-industries-slider';
  const $container = $(`.${containerId}`);

  // Only run if the element exists and has the 'enable-carousel' class
  if ($container.length > 0 && $container.hasClass('enable-carousel')) {
    const $allCards = $container.children('div');

    // Check if we have more than 9 cards
    if ($allCards.length > 9) {
      // 1. Separate: 0-8 stay in grid, 9+ go to carousel
      const $gridCards = $allCards.slice(0, 12);
      const $carouselCards = $allCards.slice(12);

      // 2. Create the slider wrapper dynamically
      // We give it a class for global styling
      const sliderWrapperId = 'dynamic-slick-wrapper';
      $container.append(`<div id="${sliderWrapperId}" class="col-12"></div>`);
      const $slider = $(`#${sliderWrapperId}`);

      // 3. Move cards 10+ into the slider and clean Bootstrap classes
      $carouselCards.appendTo($slider);
      $carouselCards.removeClass('col-lg-4 col-md-6 col-4');

      // 4. Initialize Slick with your specific settings
      $slider.slick({
        centerMode: false,
        centerPadding: '8px',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 520, settings: { slidesToShow: 2 } },
          { breakpoint: 290, settings: { slidesToShow: 1 } }
        ]
      });
    }
  }
};

// Run the function when DOM is ready
$(document).ready(function () {
  initGlobalIndustrySlider();
});

document.addEventListener('DOMContentLoaded', function () {
  /* ============ Accordion Toggle ============= */
  window.toggleAccordion = function (header) {
    const currentGroup = header.parentElement;
    const allGroups = document.querySelectorAll('.accordion-group');

    allGroups.forEach(group => {
      if (group !== currentGroup) {
        group.classList.remove('open');
      }
    });

    currentGroup.classList.toggle('open');
  };

  /* ========== Category Switch ============= */
  window.showCategory = function (event, categoryId) {
    event.stopPropagation();

    // Hide all panels
    document.querySelectorAll('.category-content').forEach(panel => {
      panel.classList.remove('active');
    });

    // Remove active from nav links
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Activate selected panel + nav
    const targetPanel = document.getElementById(categoryId);
    if (targetPanel) targetPanel.classList.add('active');

    event.currentTarget.classList.add('active');
  };

  /* =============== CTA Hover Logic ================= */
  document.querySelectorAll('.category-content').forEach(category => {
    const cards = category.querySelectorAll('.menu-card');
    const banners = category.querySelectorAll('.cta-banner');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const targetId = card.getAttribute('data-target');

        // Remove active only inside this category
        banners.forEach(banner => banner.classList.remove('active'));

        // Activate target CTA
        const targetBanner = category.querySelector(`#${targetId}`);
        if (targetBanner) {
          targetBanner.classList.add('active');
        }
      });
    });
  });

});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    // Remove active from all tab contents
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Add active to clicked button and related tab
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  });
});





function logLeadError(customMessage, extraData = {}) {
  if (!window._reportedLeadErrors) {
    window._reportedLeadErrors = new Set();
  }

  function getLogErrorUrl() {
    const host = window.location.hostname;
    const isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '[::1]' ||
      host.endsWith('.local') ||
      host.endsWith('.test');

    return isLocal ? '/vasyerpwebsite/log-lead-error.php' : '/log-lead-error.php';
  }

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return 'Mobile Phone';
    if (/ipad|tablet/i.test(ua)) return 'Tablet';
    return 'Desktop Computer';
  }

  function isIgnorableError(message) {
    const msg = String(message).toLowerCase();
    return (
      msg.includes('failed to fetch') ||
      msg.includes('networkerror') ||
      msg.includes('load failed') ||
      msg.includes('script error')
    );
  }

  // --- NEW: Helper to extract intl-tel-input data ---
  function getPhoneInputData(formOrElement) {
    if (!formOrElement) return null;

    // Search for input fields initialized with intlTelInput inside target or parent form
    const phoneInputs = formOrElement.querySelectorAll
      ? formOrElement.querySelectorAll('input[type="tel"], .iti input, [id*="phone"]')
      : [];

    const phoneData = {};

    phoneInputs.forEach((input, index) => {
      // Method 1: Check if window.intlTelInput instance exists on element via plugin method
      let itiInstance = window.intlTelInputGlobals
        ? window.intlTelInputGlobals.getInstance(input)
        : null;

      if (itiInstance) {
        const countryData = itiInstance.getSelectedCountryData();
        const fieldKey = input.id || input.name || `phone_field_${index + 1}`;
        phoneData[fieldKey] = {
          dialCode: countryData.dialCode ? `+${countryData.dialCode}` : null,
          countryCode: countryData.iso2 ? countryData.iso2.toUpperCase() : null,
          countryName: countryData.name || null,
          fullNumber: itiInstance.getNumber() || input.value
        };
        return;
      }

      // Method 2: Fallback to reading DOM structure created by intl-tel-input
      const itiWrapper = input.closest('.iti') || input.closest('.intl-tel-input');
      if (itiWrapper) {
        const selectedFlag = itiWrapper.querySelector('.iti__selected-flag, .selected-flag');
        const dialCodeElement = itiWrapper.querySelector('.iti__selected-dial-code');

        let dialCode = dialCodeElement ? dialCodeElement.textContent.trim() : null;
        let titleAttr = selectedFlag ? selectedFlag.getAttribute('title') : '';

        // Extract dialcode from title attribute (e.g., "India: +91") if not directly found
        if (!dialCode && titleAttr && titleAttr.includes('+')) {
          const match = titleAttr.match(/\+\d+/);
          if (match) dialCode = match[0];
        }

        const fieldKey = input.id || input.name || `phone_field_${index + 1}`;
        phoneData[fieldKey] = {
          dialCode: dialCode || 'Unknown',
          selectedCountryTitle: titleAttr || 'Unknown',
          rawInputValue: input.value
        };
      }
    });

    return Object.keys(phoneData).length > 0 ? phoneData : null;
  }

  // Auto-detect triggering element & parent form details
  let formId = null;
  let callingElementInfo = null;
  let formDataObj = {};

  let target = null;

  if (extraData.inputFieldId) {
    target = document.getElementById(extraData.inputFieldId);
  }

  if (!target && window.event && window.event.target) {
    target = window.event.target;
  }

  let formElement = null;

  if (target) {
    callingElementInfo = `${target.tagName}${target.id ? '#' + target.id : ''}${target.name ? '[name=' + target.name + ']' : ''}`;

    formElement = target.closest
      ? target.closest('form')
      : (typeof $ !== 'undefined' ? $(target).closest('form')[0] : null);

    if (formElement) {
      formId = formElement.id || formElement.name || 'Form Has No ID/Name';

      if (typeof $ !== 'undefined') {
        $.each($(formElement).serializeArray(), function (_, field) {
          formDataObj[field.name] = field.value;
        });
      } else {
        const formData = new FormData(formElement);
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });
      }
    }
  }

  const message = customMessage || 'Lead Processing Error';

  if (isIgnorableError(message)) return;

  const formStateSignature = Object.keys(formDataObj).length > 0
    ? JSON.stringify(formDataObj)
    : JSON.stringify(extraData);

  const errorKey = `${message}:${window.location.pathname}:${formStateSignature}`;

  if (window._reportedLeadErrors.has(errorKey)) return;
  window._reportedLeadErrors.add(errorKey);

  // --- NEW: Automatically collect Phone / Dial Code Info ---
  const phoneDetails = getPhoneInputData(formElement || target || document);

  const combinedExtraData = {
    triggeringElement: callingElementInfo || 'Unknown Element',
    sourceFormId: formId || 'Not inside a form',
    sourceFormData: Object.keys(formDataObj).length > 0 ? formDataObj : 'No form data',
    phoneInputDetails: phoneDetails || 'No intlTelInput detected', // Captured Phone Data
    ...extraData
  };

  const payload = {
    type: 'Lead Capture Error',
    message: message,
    url: window.location.href,
    referrer: document.referrer || 'Direct Visit / Bookmark',
    userAgent: navigator.userAgent,
    deviceType: getDeviceType(),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toLocaleString(),
    extraData: combinedExtraData
  };

  fetch(getLogErrorUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(err => console.error('Failed to send lead error alert:', err));
}