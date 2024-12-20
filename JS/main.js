window.onload = function() {
    document.addEventListener('DOMContentLoaded', function() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainContent = document.getElementById('main-content');

        welcomeScreen.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeOut') {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(function() {
            mainContent.style.opacity = 1;
            document.body.style.overflow = 'auto';
            }, 10);
        }
        });
    });        
    // 轮播图片数组
    const wallpapers = [
        "images/bg3.png",
        "images/bg5.jpg",
        "images/bg1.png",
        "images/bg7.png",
        "images/bg8.png"
    ];
    
    // 当前背景图片索引
    let currentIndex = 1;
    let changeBackgroundTimer = setTimeout(changeBackground, 5000);


    // 背景轮播指示器
    const backgroundIndicator = document.createElement('div');
        backgroundIndicator.className = 'background-indicator';
        document.body.appendChild(backgroundIndicator);

        // 为每个背景图片添加一个指示器点
        wallpapers.forEach((wallpaper, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';

            backgroundIndicator.appendChild(dot);
        });

        // 初始化指示器状态
        const dots = document.querySelectorAll('.background-indicator .dot');
        function updateIndicator() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        updateIndicator();


    // 切换背景图片
    function changeBackground() {
        // 清除现有的定时器
        clearTimeout(changeBackgroundTimer);
        // 更新图片路径
        const img = document.querySelector('#BacImages img');
        // 切换图片之前移除动画
        img.style.animation = '';
        img.onload = function() {
            img.style.animation = 'slideIn 1s ease-in-out'; // 添加动画效果
        };
        img.src = wallpapers[currentIndex];
        img.src = wallpapers[currentIndex];
        // 计算下一个索引
        currentIndex = (currentIndex + 1) % wallpapers.length;
        // 重新设置定时器
        changeBackgroundTimer = setTimeout(changeBackground, 5000);
        updateIndicator();
        

    }

};

document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');

    welcomeScreen.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeOut') {
            // 当淡出动画结束后
            welcomeScreen.style.display = 'none'; // 隐藏欢迎屏幕
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 广州
    var CTnameGZ = document.getElementById('gz');
    CTnameGZ.addEventListener('mouseover', function() {
        var p1 = document.getElementById('p1');
        p1.style.display = 'block';
        var p0 = document.getElementById('p0');
        p0.style.display = 'none';
        var w1 = document.getElementById('w1');
        w1.style.display = 'block';
    });

    CTnameGZ.addEventListener('mouseout', function() {
        var p1 = document.getElementById('p1');
        p1.style.display = 'none';
        var p0 = document.getElementById('p0');
        p0.style.display = 'block';
        var w1 = document.getElementById('w1');
        w1.style.display = 'none';
    });


    //汕头
    var CTnameST = document.getElementById('st');
    CTnameST.addEventListener('mouseover', function() {
        var p3 = document.getElementById('p3');
        p3.style.display = 'block';
        var p0 = document.getElementById('p0');
        p0.style.display = 'none';
        var w1 = document.getElementById('w3');
        w1.style.display = 'block';
    });

    CTnameST.addEventListener('mouseout', function() {
        var p3 = document.getElementById('p3');
        p3.style.display = 'none';
        var p0 = document.getElementById('p0');
        p0.style.display = 'block';
        var w1 = document.getElementById('w3');
        w1.style.display = 'none';
    });

    //佛山
    var CTnameFS = document.getElementById('fs');
    CTnameFS.addEventListener('mouseover', function() {
        var p4 = document.getElementById('p4');
        p4.style.display = 'block';
        var p0 = document.getElementById('p0');
        p0.style.display = 'none';
        var w1 = document.getElementById('w4');
        w1.style.display = 'block';
    });

    CTnameFS.addEventListener('mouseout', function() {
        var p4 = document.getElementById('p4');
        p4.style.display = 'none';
        var p0 = document.getElementById('p0');
        p0.style.display = 'block';
        var w1 = document.getElementById('w4');
        w1.style.display = 'none';
    });

    //湛江
    var CTnameZJ = document.getElementById('zj');
    CTnameZJ.addEventListener('mouseover', function() {
        var p5 = document.getElementById('p5');
        p5.style.display = 'block';
        var p0 = document.getElementById('p0');
        p0.style.display = 'none';
        var w1 = document.getElementById('w5');
        w1.style.display = 'block';
    });

    CTnameZJ.addEventListener('mouseout', function() {
        var p5 = document.getElementById('p5');
        p5.style.display = 'none';
        var p0 = document.getElementById('p0');
        p0.style.display = 'block';
        var w1 = document.getElementById('w5');
        w1.style.display = 'none';
    });

    //东莞
    var CTnameDG = document.getElementById('dg');
    CTnameDG.addEventListener('mouseover', function() {
        var p6 = document.getElementById('p6');
        p6.style.display = 'block';
        var p0 = document.getElementById('p0');
        p0.style.display = 'none';
        var w1 = document.getElementById('w6');
        w1.style.display = 'block';
    });

    CTnameDG.addEventListener('mouseout', function() {
        var p5 = document.getElementById('p6');
        p5.style.display = 'none';
        var p0 = document.getElementById('p0');
        p0.style.display = 'block';
        var w1 = document.getElementById('w6');
        w1.style.display = 'none';
    });

});

// 获取所有的.list-item元素
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((item, index) => {
    if (index!== 0) { // 排除第一张照片（索引为0），只给其他照片添加鼠标悬停效果
        item.addEventListener('mouseover', () => {
            // 将当前悬停的图片设置为原始大小并提升层级
            item.style.width = '350px';
            item.style.zIndex = '2';

            // 根据当前悬停元素的索引，确定其他元素的变化
            listItems.forEach((otherItem, otherIndex) => {
                if (otherIndex!== index) {
                    // 设置其他元素的缩放和透明度变化，实现缩到一边且视觉柔和的效果
                    otherItem.style.width = '240px';
                    
                    otherItem.style.zIndex = '1';

                }
            });
        });

        item.addEventListener('mouseout', () => {
            // 鼠标移出时，恢复所有图片的原始状态
            listItems.forEach((restoreItem) => {
                restoreItem.style.width = '240px';
            restoreItem.style.opacity = '1';
            restoreItem.style.zIndex = '1';
            restoreItem.style.transform = 'scale(1)';
            });
        });
    }
});


window.addEventListener('DOMContentLoaded', function () {
const mainNewsImage = document.getElementById('main-news-image');
const mainNewsTitle = document.getElementById('main-news-title');
const mainNewsDate = document.querySelector('.main-news-date');
const mainNewsText = document.querySelector('.main-news-text');
const newsArticles = document.querySelectorAll('.news-article');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let intervalId;
let currentIndex = 0;
let isHovering = false; // 是否悬停在新闻列表上

// 更新主新闻区域的所有内容（图片、标题、日期、文本内容）
function updateMainNews(article) {
    mainNewsImage.src = article.getAttribute('data-news-image');
    mainNewsTitle.textContent = article.getAttribute('data-news-title');
    mainNewsDate.textContent = article.getAttribute('data-news-date');
    mainNewsText.innerHTML = article.getAttribute('data-news-text');
}

// 为每个新闻列表项添加鼠标悬停事件
newsArticles.forEach((article) => {
    article.addEventListener('mouseenter', function () {
        isHovering = true;
        clearInterval(intervalId);  // 停止自动轮播
        updateMainNews(article);  // 更新为悬停的新闻
    });

    article.addEventListener('mouseleave', function () {
        isHovering = false;
        if (!isHovering) {
            startNewsCycle();  // 如果鼠标不在新闻列表上，重新开始轮播
        }
    });
});

// 自动轮播新闻
function cycleNews() {
    let nextIndex = (currentIndex + 1) % newsArticles.length;
    updateMainNews(newsArticles[nextIndex]);
    currentIndex = nextIndex;
}

// 设置轮播定时器，修改间隔时间为 3 秒
function startNewsCycle() {
    if (!intervalId) {  // 仅在没有定时器时启动轮播
        intervalId = setInterval(cycleNews, 3000); // 设置为 3 秒
    }
}

// 为"上一条新闻"按钮添加事件
prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + newsArticles.length) % newsArticles.length;
    updateMainNews(newsArticles[currentIndex]);
    resetAutoCycle();  // 点击按钮时重启轮播
});

// 为"下一条新闻"按钮添加事件
nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % newsArticles.length;
    updateMainNews(newsArticles[currentIndex]);
    resetAutoCycle();  // 点击按钮时重启轮播
});

// 重启自动轮播（如果自动轮播已经停止）
function resetAutoCycle() {
    clearInterval(intervalId);  // 停止当前的定时器
    intervalId = null;  // 清空定时器ID
    if (!isHovering) {
        startNewsCycle();  // 如果鼠标不在新闻项上，重新启动轮播
    }
}

// 初始化主新闻区域的内容
updateMainNews(newsArticles[currentIndex]);

// 开始轮播新闻
startNewsCycle();
});
