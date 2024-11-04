//btnというidを取得し、定数btnに代入
const btn = document.getElementById('btn');
//textというidを取得し、定数textに代入
const text = document.getElementById('text');


//クリックした際のイベントを作成
btn.addEventListener('click', () => {

//2秒後に文字を書き換える
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000)
});