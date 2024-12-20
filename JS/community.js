window.onload = function() {
    var textarea = document.getElementById('TopicContent');

    // 设置默认文本
    function setDefaultText() {
        if (textarea.value === '') {
            textarea.value = '最近有什么好吃的想分享呢？';
            textarea.style.color = '#999'; // 可以设置一个较浅的颜色表示默认文本
        }
    }

    // 清除默认文本
    function clearDefaultText() {
        if (textarea.value === '有什么想分享的？') {
            textarea.value = '';
            textarea.style.color = '#000'; // 重置为正常文本颜色
        }
    }

    // 监听事件
    textarea.addEventListener('focus', clearDefaultText);
    textarea.addEventListener('blur', setDefaultText);

    // 初始化默认文本
    setDefaultText();
};