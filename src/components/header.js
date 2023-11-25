import './style/header.css'
export default (props) => {
  return (
    <div id={"header"}>
      <section className={"welcomeText"}>🙋‍♀️ <span id={"header-welcome"}><span id={"header-welcome-name"}>{props.name}</span>님</span> <span className={"clxxthyng"}>클루팅</span>에 오신것을 환영합니다!</section>
    </div>
  )
}