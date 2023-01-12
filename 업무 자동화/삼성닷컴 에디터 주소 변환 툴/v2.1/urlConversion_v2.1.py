# url
import clipboard, webbrowser

html = ".html"
url = clipboard.paste()

if "/uk/" in url:
    url = url.replace('p6-qa', 'p6-eu-author')
else:
    url = url.replace('p6-qa', 'p6-ap-author')

url = url.replace('samsung.com', 'samsung.com/editor.html/content/samsung')
url = url[0:-1] + html
clipboard.copy(url)

Chrome = '\"C:\Program Files\Google\Chrome\Application\chrome.exe\" %s --incognito'
# \을 가장 앞에 붙여야 Files\Google\Chrome\Application\chrome.exe 이 실행파일로 인식되지 않음
webbrowser.register(name=Chrome, klass=None, instance=webbrowser.BackgroundBrowser(Chrome))
webbrowser.get(Chrome).open_new(url)
