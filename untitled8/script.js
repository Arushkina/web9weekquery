$(document).ready(function() {
  $('#showPassword').click(function() {
    var passwordInput = $('#passwordInput');
    passwordInput.attr('type', passwordInput.attr('type') === 'password' ? 'text' : 'password');
  });
});

//кнопка недос
$(document).ready(function() {
  $('#approve').click(function() {
    if ($(this).is(':checked')) {
      $('#submitButton').prop('disabled', false);
    } else {
      $('#submitButton').prop('disabled', true);
    }
  });
});


$(document).ready(function() {
  $('body').css('background-image', 'url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1200")');
});


$(document).ready(function() {
  $('#textarea').on('input', function() {
    var remainingChars = 7 - $(this).val().length;
    $('#charCount').text(remainingChars);
  });
});

//исчезновение
$(document).ready(function() {
  $('#fadeParagraph').click(function() {
    $(this).animate({ opacity: 0 }, 1000);
  });
});

//менять размер
$(document).ready(function() {
  $('#btn1').click(function() {
    $('#box').animate({ height: '200px', width: '200px' }, 4000);
  });

  $('#btn2').click(function() {
    $('#box').animate({ height: '5000px', width: '100px' }, 2000);
  });
});


$(document).ready(function() {
  $('#scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
}); //вверх
