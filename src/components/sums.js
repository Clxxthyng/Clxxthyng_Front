import './style/sums.css'
import Developing from "./developing...";
export default (props) => {
  let typename = '메신저 요약'

  if (props.type==='border') {
    typename = '공지'
  } else if (props.type==='event') {
    typename = '일정'
  }

  if (props.developing==="true") {
    return (
      <div id="sum">
        <h1>{typename}</h1>
        <div className={"viewer"}>
          <Developing />
        </div>
      </div>
    )
  }

  return (
    <div id="sum">
      <h1>{typename}</h1>
      <div className={"viewer"}></div>
    </div>
  )

}