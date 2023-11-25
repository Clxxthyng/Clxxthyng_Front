import './style/login.css'
import close from '../images/close.svg'
import invisibility from '../images/visibility_off.svg'

export default () => {
  return (
    <div id={"login"}>
      <section >
        <form action="#!" className={"login"} method="post">
          <img src={close} alt="close"/>
          <h1>Login</h1>
          <p>클루팅에 오신 것을 환영합니다.</p>
          <form action="#" method={"post"}></form>
          <section className={"id"}><input name="id" id={"login-id"} type="id" placeholder="아이디를 입력해주세요."/></section>
          <section className={"password"}><input name="password" id={"login-password"} type="password" placeholder="비밀번호를 입력해주세요."/><img src={invisibility}
                                                                                                                                         alt="invisibility"
                                                                                                                                         className={"invisibility"}/></section>
          <div className={"autologin"}><div><input type="checkbox" name="autoLogin" id="autoLogin" className={"box"}/></div><span>자동로그인</span></div>
          <input type="submit" className={"submit"} value={"로그인"}/>
        </form>
      </section>
    </div>
  )
}