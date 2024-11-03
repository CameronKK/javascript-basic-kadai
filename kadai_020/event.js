//btnというidをもつHTML要素を取得し、定数btnに代入
const btn = document.getElementById('btn');

//textというidをもつHTML要素を取得し、定数textに代入
const text = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener('click', () =>{

    //li要素を新しく作成し、定数childListに代入
    const childList = document.createElement('li');

    //作成したli要素をul要素の子要素として末尾に追加
    text.appendChild(childList);

    //.textContentでid="text"の文章を書き換える
    text.textContent = 'ボタンをクリックしました';
});