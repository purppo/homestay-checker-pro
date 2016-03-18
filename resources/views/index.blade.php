<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    <title>Smaple</title>
    
<style type="text/css">
.topbanner {
  background-image: url(img/business-idea.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 180px;
}
body {
  background-color: #D4D4D4;
}
</style>

</head>
<body>
    <div class="container-fluid">
      <h1><img src="img/logo.png" style="height:30px"></h1>
      <div class="row">
        <div class="topbanner"></div>
      </div>
      <hr/>
      <div class="row">
        <form>
        <div class="text-center">
          <ol>
            <li>질문. OOO 하고 계십니까?  <label class="radio-inline"><input type="radio" name="q2"> Yes </label> <label class="radio-inline"><input type="radio" name="q2"> No </label> </li>
            <li>질문. OOO 하고 계십니까?  <label class="radio-inline"><input type="radio" name="q3"> Yes </label> <label class="radio-inline"><input type="radio" name="q3"> No </label> </li>
            <li>질문. OOO 하고 계십니까?  <label class="radio-inline"><input type="radio" name="q4"> Yes </label> <label class="radio-inline"><input type="radio" name="q4"> No </label> </li>
            <li>질문. OOO 하고 계십니까?  <label class="radio-inline"><input type="radio" name="q5"> Yes </label> <label class="radio-inline"><input type="radio" name="q5"> No </label> </li>
          </ol>
        </div>
      </div>
    
      <div class="row">
        <div class="col-xs-4"></div>
        <div class="col-xs-4"><button type="button" class="btn btn-primary-outline btn-lg btn-block">Check</button></div>
        <div class="col-xs-4"></div>
      </div>
      </form>
      <hr>
      <div class="row">
          <div class="col-xs-12">
              <footer>
                <p>
                  ©2016 Team HomeStayChecker <a href="https://github.com/homeStayChecker" traget="_blank"><i class="icon-github-sign"></i></a>
                </p>
              </footer>
          </div>
      </div>
    </div>
    <div id="content"></div>
    <script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>
