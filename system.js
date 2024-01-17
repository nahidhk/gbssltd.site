// the nav system data 
var nav = `
  <!--nav top only -->
  <section class="nav-01" title="Full Screen= (F11)">

    <div title="logo/img" data-app="box-data" class="logo-box">
      <img class="logo" src="/home/logo.png" alt="">
    </div>
    <br>
    <div title="nav-text" class="nav-text">
      <span><span class="typed-text">গ্রাম বাংলা সঞ্চয় ও ঋণদান সমবায় সমিতি লিমিটেড</span><span class="cursor blink">&nbsp;</span></span>
    </div>
  </section>
  <!--/////nav top only //////-->



  <!---main nav bar--->
  <section title="main nav bar" class="main-nav-bar">
    <!--mobile-->
    <div class="mobile-menu">
      <div class="mobile-menu-box">
        <div id="menu" class="mobile-menu-icon">
          <i class="fa fa-bars" style="font-size:36px; color: #fff;"></i>
        </div>
      </div>
    </div>

    <!---- desceop mode-->
    <!-- 1 -->
    <div id="mobile" class="mobile">
      <div onclick="cut()" class="cl-btn">
        <i class="fa fa-close" style="font-size:40px;color: #fff;"></i>
      </div>
      <!-- 2 -->
      <div class="kit">




        <button onclick="window.location.href='/home/index.html'" class="btn">হোম </button>
        <div class="menu-o1">
          <button class="btn"> আমাদের সম্পর্কে <i class="fa fa-angle-down" style="font-size:24px"></i></button>
          <div class="dropdown-content">
            <button class="exe" onclick="manager()">চেয়ারম্যানের বানী</button>
            <button class="exe" onclick="function1()"> ইতিহাস</button>
            <button class="exe" onclick="history()"> উদেশ্য </button>
            <button class="exe" onclick="flan()">ভবিষ্যৎ পরিক্লপনা </button>
            <button class="exe" onclick="earn()">অর্জণ</button>

          </div>
        </div>
        <div class="menu-o1">
          <button class="btn"> পরিচালনা পরিষদ <i class="fa fa-angle-down" style="font-size:24px"></i></button>
          <div class="dropdown-content">
            <button class="exe" onclick="function2()">কার্যকরী পরিষদ</button>
            <button class="exe" onclick="function3()"> অফিস কর্মীবৃন্দ</button>
            <button class="exe" onclick="function4()"> কালেক্টর বৃন্দ </button>
            <button class="exe" onclick="function5()">উপদেষ্টা ও বিভিন্ন উপ-কমিটি </button>


          </div>
        </div>
        <div class="menu-o1">
          <button class="btn"> অফিস ব্যবস্থাপনা <i class="fa fa-angle-down" style="font-size:24px"></i></button>
          <div class="dropdown-content">
          <button class="exe" onclick="function7()"> সর্বশেষ আপডেট </button>

          </div>
        </div>
        <div class="menu-o1">
          <button class="btn" onclick="function12()"> সেবা সমূহ</button>
          <div class="dropdown-content">

          </div>
        </div>
        <div class="menu-o1">
          <button class="btn"> ফটো গ্যালারী<i class="fa fa-angle-down" style="font-size:24px"></i></button>
          <div class="dropdown-content">
            <button class="exe" onclick="function6()"> "ভবন’’ উদ্বোধন </button>
          
            <button class="exe" onclick="function8()"> গ্যালারী ১ </button>


          </div>
        </div>


        <div class="menu-o1">
          <button class="btn">অন্যান্য <i class="fa fa-angle-down" style="font-size:24px"></i></button>
          <div class="dropdown-content">
            <button class="exe"> আরকাইভ </button>
            <button class="exe" onclick="function9()"> কর্মসংস্থান </button>
            <button class="exe" onclick="function10()"> নিউজ </button>
            <button class="exe" onclick="function11()">
              বার্ষিক অডিট প্রতিবেদন
            </button>


          </div>
        </div>
      </div><!-- end 2 site -->
    </div> <!-- end 1 site -->


  </section>
  <!--------The End menu opson--------------->
  `

  var foter = `  <!---- foter box -->
  <section class="foter">
    <br><br>
    <center>


      <!-- pc row -->
      <div class="row">
        <!--box no 1-->
        <div id="box6" class="box">
          <br>
          <div onclick="box6x()" id="box6-x" class="btn-x"><i class="bi bi-x-square"></i></div>
          <span onclick="box6()" title="adress book" data-googlemaps="src-#" id="title"><i
              class="bi bi-folder-symlink"></i> quick link
            <hr color="#c2c2c2">
          </span>
          <ul>
            <li class="line" onclick="function10()"> নিউজ </li>

            <li class="line" onclick="function11()">
              বার্ষিক অডিট প্রতিবেদন
            </li>

            <li class="line" onclick="function12()"> সেবা সমূহ</li>
            <li class="line" onclick="function1()"> ইতিহাস</li>

          </ul>
        </div>
        <br><br>
        <!--box no 2-->
        <div id="box2" class="box">
          <br>
          <div onclick="box5x()" id="box5-x" class="btn-x"><i class="bi bi-x-square"></i></div>
          <span onclick="box5()" title="adress book" data-googlemaps="src-#" id="title"><i
              class="bi bi-compass"></i>সরাসরি ম্যাপ দেখুন
            <hr color="#c2c2c2">
          </span>
          <iframe class="mapx"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3643.952989226034!2d89.42533107430236!3d24.032722877881188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAxJzU3LjgiTiA4OcKwMjUnNDAuNSJF!5e0!3m2!1sen!2sbd!4v1702035632227!5m2!1sen!2sbd"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <br><br>
        <!--box no 3-->
        <div id="box4" class="box"><br>
          <div onclick="box4x()" id="box1-x" class="btn-x"><i class="bi bi-x-square"></i></div>
          <span onclick="box4()" title="adress book" data-googlemaps="src-#" id="title"><i class="bi bi-building"></i>
            যোগাযোগ মাধ্যম
            <hr color="#c2c2c2">
          </span>

          <div class="info-box">

            <a href="mailto:info@gbssltd.site" class="info-logo"><i
                class="bi bi-envelope"></i>&nbsp;&nbsp;&nbsp;ingo@gbssltd.site</a>
            <br><br>
            <a href="tel:+8801770601214" class="info-logo"><i
                class="bi bi-telephone"></i>&nbsp;&nbsp;&nbsp;01770601214</a>
            <br><br>
            <a href="#" class="info-logo"><i class="bi bi-facebook"></i>&nbsp;&nbsp;&nbsp;incoming</a>
            <br><br>
            <a href="#" class="info-logo"><i class="bi bi-twitter-x"></i>&nbsp;&nbsp;&nbsp;incoming</a>
            <br><br>
            <a href="#" class="info-logo"><i class="bi bi-youtube"></i>&nbsp;&nbsp;&nbsp;incoming</a>
          </div>
          <br>
          <i class="bi bi-geo-alt" style="font-size: 49px;"></i><br>
          <address id="adrs">পুটিপাড়া,আতাইকুলা,সাঁথিয়া,পাবনা</address>
          <br>

        </div>
      </div>
      </div>
      <!---email box-->
      <br>
      <br>
      <div class="email">
        <form action="mail.php" method="POST">
          <label for="email"></label>
          <input placeholder="Enter The Email" type="email" name="email"><button type="submit">Subscrieb</button>
        </form>
      </div>
      <br>
      <!---copyrghat--->
      <div class="copy">
        <p style="color: white;" title="DEveloped By Nahid HK">কপিরাইট &copy;<a style="color: white;"
            href="https://www.nahidhk.info"> গ্রাম বাংলা সঞ্চয় ও ঋণদান সমবায় সমিতি লিমিটেড</a></p>
      </div>
    </center>
  </section>
`


document.getElementById("nav").innerHTML=nav;
document.getElementById("foter").innerHTML=foter;

