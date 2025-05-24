
    //获取事件，输入标签，直接插入时间
    function updateTime(ElementId) {
      let getTimeElement = document.getElementById(ElementId)
      let now = new Date()
      let hours = String(now.getHours()).padStart(2, "0")
      let minutes = String(now.getMinutes()).padStart(2, "0")
      let miao = String(now.getSeconds()).padStart(2, "0")
      let time = `${hours}:${minutes}:${miao}`
      // console.log(time)
      getTimeElement.innerText = time
    }

    updateTime("header-time")
    setInterval(() => { updateTime("header-time") }, 1000);
