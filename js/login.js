$(document).ready(function() {
 
    var modal = `<!-- Login Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="loginModal" aria-hidden="false">
          <div class="modal-dialog modal-dialog-centered" role="document">
            
            <div class="modal-content">
              
              <!-- partial:index.partial.html -->
              <div class="login-form">
                <form>
                  <h2>تسجيل الدخول</h2>
                  <div class="content">
                    <div class="input-field">
                      <input type="email" placeholder="البريد الالكتروني أو رقم التليفون"  >
                    </div>
                    <div class="input-field">
                      <input type="password" placeholder="كلمة السر"  >
                    </div>
                    

                    <div class="form-check">
                      <label>تذكرني</label>
                      <label>
                        <input type="checkbox" name="checkbox" value="css" />
                        <span></span>
                      </label>
                    </div>


                  </div>
                  <div class="action">
                    <a  id="createAccount" >إنشاء حساب</a>
                    <a  id="login">دخول</a>
                  </div>

                  <div class="forget">
                    <a id="forgetPassword" href="#!" class="link">هل نسيت كلمة السر؟</a>
                  </div>
                  
                </form>
              </div>
              <!-- partial -->
              
            </div>
            
          </div>
        </div>
        <!-- Login Modal -->
  `

  $('.main').append(modal);

  
    //create account
    document.getElementById("createAccount").onclick = function () {
      debugger
      var url = document.URL;
      if(url.includes('pages')){
        location.href = '../pages/create-account.html'; 
      }else{
        location.href = './pages/create-account.html'; 
      }
    };

    //create account
    document.getElementById("login").onclick = function () {
      debugger
      var url = document.URL;
      if(url.includes('pages')){
        location.href = '../pages/profile.html'; 
      }else{
        location.href = './pages/profile.html'; 
      }
    };

    //forget password
    document.getElementById("forgetPassword").onclick = function () {
      debugger
      var url = document.URL;
      if(url.includes('pages')){
        location.href = '../pages/forget-password.html'; 
      }else{
        location.href = './pages/forget-password.html'; 
      }
    };

  });