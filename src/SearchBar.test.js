/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
const React = require('react');
const render = require('@testing-library/react').render;
const fireEvent = require('@testing-library/react').fireEvent;
const axios = require('axios');
const SearchBar = require('./SearchBar').default;

// Mock axios.get 方法
jest.mock('axios');

describe('SearchBar', function () {
  beforeEach(function () {
    // 设置 axios.get 的模拟返回值
    axios.get.mockResolvedValue({
      data: {
        success: true,
        resources: [
          { text: '中国银行', id: 1 },
          { text: '中国邮政', id: 2 },
          { text: '中国移动', id: 3 },
        ],
      },
    });
  });

  afterEach(function () {
    // 清理模拟返回值和 axios.get 的调用次数
    axios.get.mockRestore();
  });

  test('renders SearchBar component', function (done) {
    // 渲染 SearchBar 组件
    render(React.createElement(SearchBar, null));

    // 检查 logo 图片是否存在
    const logoElement = document.querySelector('.logo');
    expect(logoElement).toBeInTheDocument();

    // 模拟输入框输入文字
    const inputElement = document.querySelector('.search-input');
    fireEvent.change(inputElement, { target: { value: '中国' } });

    // 检查输入框的值是否更新
    expect(inputElement.value).toBe('中国');

    // 等待异步请求完成
    setTimeout(function () {
      // 检查下拉列表是否显示
      const suggestionsElement = document.querySelector('.suggestions-dropdown');
      expect(suggestionsElement).toBeInTheDocument();

      // 模拟按下 Enter 键
      fireEvent.keyDown(inputElement, { key: 'Enter' });

      // 检查输入框的值是否改变
      expect(inputElement.value).toBe('中国银行');

      // 检查下拉列表是否隐藏
      expect(suggestionsElement).not.toBeInTheDocument();

      done();
    }, 0);
  });
});
