<html>
    <body>
    <p>여기는 server2.php 페이지로 이동한 것입니다.</p>

    전달받은 히든은 <?php echo $_POST['hidden']; ?> 입니다.<br>
    전달받은 아이디는 <?php echo $_POST['text']; ?> 입니다.<br>
    전달받은 비밀번호는 <?php echo $_POST['password']; ?> 입니다.<br>
    전달받은 텍스트는 <?php echo $_POST['text_2']; ?> 입니다.<br>
    전달받은 검색창은 <?php echo $_POST['search']; ?> 입니다.<br>
    전달받은 URL주소는 <?php echo $_POST['url']; ?> 입니다.<br>
    전달받은 이메일은 <?php echo $_POST['email']; ?> 입니다.<br>
    전달받은 전화번호는 <?php echo $_POST['tel']; ?> 입니다.<br>
    전달받은 숫자는 <?php echo $_POST['email']; ?> 입니다.<br>
    전달받은 범위는 <?php echo $_POST['range']; ?> 입니다.<br>
    전달받은 라디오는 <?php echo $_POST['radio']; ?> 입니다.<br>
    전달받은 체크박스는 <?php for($i = 0; $i < count($_POST['checkbox']); $i++){
        echo $_POST['checkbox'][$i];
        echo ",";
    }?>입니다.<br>
    전달받은 색깔은 <?php echo $_POST['color']; ?> 입니다.<br>
    전달받은 날짜는 <?php echo $_POST['date']; ?> 입니다.<br>
    전달받은 월은 <?php echo $_POST['month']; ?> 입니다.<br>
    전달받은 주는 <?php echo $_POST['week']; ?> 입니다.<br>
    전달받은 시간은 <?php echo $_POST['time']; ?> 입니다.<br>
    전달받은 date_time_local은 <?php echo $_POST['datetime-local']; ?> 입니다.<br>
    전달받은 select는 <?php echo $_POST['select']; ?> 입니다.<br>
    전달받은 optgroup는 <?php echo $_POST['optgroup']; ?> 입니다.
    전달받은 data는 <?php echo $_POST['data']; ?> 입니다.<br>
    </body>
</html>