Page({

  /**
   * 页面的初始数据
   */
  data: {
    rules: [{
        name: 'userName',
        rules: {
          required: true,
          message: '请输入您的姓名'
        },
      },
      {
        name: 'phoneNum',
        rules: [{
            required: true,
            message: '请输入您的手机号'
          },
          {
            mobile: true,
            message: '手机号格式不正确'
          }
        ],
      },
      {
        name: 'freshName',
        rules: {
          required: true,
          message: '请输入您打算售卖的商品名称'
        },
      },
      {
        name: 'price',
        rules: {
          required: true,
          message: '请输入预售价格'
        },
      },


    ],
    formData: {
      userName: "",
      phoneNum: "",
      freshName: "",
      price: ""
    },
    dialogShow: false,
    oneButton: [{
      text: '确定'
    }],
  },

  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },

  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        this.addSellData();
      }
    })
  },

  addSellData() {
    wx.showLoading({
      title: '保存中',
      mask: true
    });
    wx.cloud.callFunction({
      name: "newCelldata",
      data: this.data.formData
    }).then(() => {
      wx.hideLoading();
      wx.redirectTo({
        url: '/pages/success/success',
      });
    }).catch(() => {
      wx.hideLoading();
      this.showModal();
    });
  },

  showModal() {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton() {
    this.setData({
      dialogShow: false
    })
  }
})