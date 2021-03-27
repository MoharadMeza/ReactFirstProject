window.onload = () => {
  // this function is gonna handle the stuff async and function will called when the page is fully loaded
  const images = document.getElementsByClassName("loading"); // get the images that has specific className
  for (let image of images) {
    // for each image that has the specific className
    const { clientWidth, clientHeight } = image; // get the current size of image loaded into DOM
    const imageBaseOnSize = `http://placekitten.com/g/${clientWidth}/${clientHeight}`; //create the url for a random image base on the image size
    fetch(imageBaseOnSize).then((response) => {// را میگذاریمfetch خروجی then می‌نویسیم که داخل catch و thenهست برای ان promise  یک fetch از آن جایی که خروجی 
      response.blob().then((responseBlob) => { //   درست نشده blob نمیتواند درست شود چون urlObject ممکن است انجام نشده باشه پس  blobنگذاریم انوقت تبدیل  then است اگر promise یک blob از آن جایی که 
        const urlObject = URL.createObjectURL(responseBlob); // create a object url from the file we downloaded, so we pass it to the image as SRC
        image.setAttribute("src", urlObject); // now this src is pointing to the downloaded response we got from api . not the URL from the web !
        //simulateWaiting(5000); // just wait for fun and see the project in action ( the file sizes are small and downloaded fast . so we wait for 5 second to see they are running in order)
      })
        .catch((error) => {
          console.error('error', error);
        })
    })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }
};
  const simulateWaiting = (miloseconds = 1000) => {
    // this function simulate a waiting time base on the amount we pass to it . it returns a promise so we can await for it !
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, miloseconds);
    });
  };

// اینو مرحله به مرحله انجام دادم با ساده ترین حالت که ببینین مراحل کار رو
// تنها راه انجام این تسک این نیست . از چندین راه مختلف میشه انجامش داد
// تنها راه گرفتن عکس از آدرس هم این نیست . تبدیل به بلاب و آبجکت یوآرال هم تنها راه نیست و چندین روش میتونین پیاده کنین
// تابع نهایی تنها برای شبیه سازی یه طول کشیدن نوشته شده که بهتر ببینین چطوری به ترتیب انجام میشه
// من کد رو به جاوااسکریپت جدید نوشتم چون باهاتون اینطوری کار شده بود . طبیعتا میتونست مدل های دیگه هم نوشته بشه اما با توجه چیزی که دیدم با این استایل بهتون گفته شده
// اصل کار رو خط به خط کامنت گذاشتم که بدونین هر مرحله و خط چیکار میکنه
// طبیعتا در اول کار ازتون انتظار نمیره که کد عالی بزنین اما توی همین مثال کوچیک به این موارد دقت کنین
//// نحوه انتخاب نام متغیرها
//// نحوه انتخاب نام توابع
//// نحوه ایندنت گدازی کد ها و تعداد فاصله ها
// اگر دوست داشتید فسفور بسوزونین ، این کد باید قابلیت هندل کردن این حطاهارو داشته باشه که نوشته نشده و شما میتونین روش فسفور بسوزونین
//// اگر اینترنت قطع بود ؟
//// اگر فایل ناقص ارسال شده بود ؟
