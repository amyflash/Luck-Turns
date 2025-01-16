document.addEventListener('DOMContentLoaded', function() {

    const customButton = document.getElementById('customButton');
    const popupContainer = document.getElementById('popupContainer');
    const closeButton = document.getElementById('closeButton');

    // 当点击自定义按钮时显示弹出内容
    customButton.addEventListener('click', function() {
        document.getElementById('inputText').value = globalTextData;
        popupContainer.classList.remove('hidden');
    });

    // 当点击关闭按钮时隐藏弹出内容
    closeButton.addEventListener('click', function() {
        popupContainer.classList.add('hidden');
    });

    // 如果你还需要处理保存按钮的点击事件，可以在这里添加相应的逻辑
    document.getElementById('saveButton').addEventListener('click', function() {
        // 这里是保存按钮的点击事件处理程序
        const inputText = document.getElementById('inputText').value;
        console.log('保存的文本:', inputText);
        globalTextData = inputText;
        localStorage.setItem('globalTextData', JSON.stringify(globalTextData));
        // 在这里添加代码来处理保存的操作，例如发送到服务器等
        drawWheel();
        // 关闭弹出内容
        popupContainer.classList.add('hidden');
        window.location.href = window.location.href;
    });
});