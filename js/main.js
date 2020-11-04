// 今回の交差を監視する要素
const jss = document.querySelectorAll(".js");

const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
  threshold: 0 // 閾値は0
};

const observer = new IntersectionObserver(doWhenIntersect, options);
// それぞれのjsを監視する
jss.forEach(js => {
  observer.observe(js);
});

function doWhenIntersect(entries) {
  // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを文字を変える関数に渡す
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    }
  });
}

function activateIndex(element) {

  // console.log(element);

  if (element.classList.contains("career1") == true) {
    let test = document.getElementById('title');
    test.innerHTML = '<h1>Career1</h1>';
  } else if (element.classList.contains("career2") == true) {
    let test = document.getElementById('title');
    test.innerHTML = '<h1>Career2</h1>';
  } else if (element.classList.contains("hobby") == true) {
    let test = document.getElementById('title');
    test.innerHTML = '<h1>Hobby</h1>';
  } else if (element.classList.contains("skills") == true) {
    let test = document.getElementById('title');
    test.innerHTML = '<h1>Skills</h1>';
  } else {
    let test = document.getElementById('title');
    test.innerHTML = "<h1>Taku Matsunaga's <br> Portfolio Site</h1>";
  }
}