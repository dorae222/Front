<html>
    <body>
    <p>여기는 memership.php 페이지로 이동한 것입니다.</p>
    <h3>필수 입력 정보</h3><br>
    전달받은 아이디는 <?php echo $_POST['id']; ?> 입니다.<br>
    전달받은 비밀번호는 <?php echo $_POST['password']; ?> 입니다.<br>
    전달받은 이름은 <?php echo $_POST['name']; ?> 입니다.<br>
    전달받은 이메일은 <?php echo $_POST['email']; ?> 입니다.<br>
    전달받은 이메일 수신 동의는 <?php echo $_POST['radio']; ?> 입니다.<br>
    전달받은 선호 기술은 <?php for($i = 0; $i < count($_POST['checkbox']); $i++){
        echo $_POST['checkbox'][$i];
        echo ",";
    }?>입니다.<br><br>

    <h3>필수 입력 정보</h3><br>
    전달받은 생년월일은 <?php echo $_POST['date']; ?> 입니다.<br>
    전달받은 성별은 <?php echo $_POST['radio2']; ?> 입니다.<br>
    전달받은 직업은 <?php echo $_POST['select']; ?> 입니다.<br>
    전달받은 자기소개는 <?php echo $_POST['text2']; ?> 입니다.<br>
    </body>
</html>