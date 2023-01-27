# url
import clipboard, webbrowser

html = ".html"
url = clipboard.paste()

if "/uk/" in url:
    url = url.replace('p6-qa', 'p6-eu-author')
else:
    url = url.replace('p6-qa', 'p6-ap-author')

url = url.replace('samsung.com', 'samsung.com/editor.html/content/samsung')

if url.strip()[-1] == '/':
    url = url[0:-1] + html
else:
    url += html

Chrome = '\"C:\Program Files\Google\Chrome\Application\chrome.exe\" %s'

'''
\을 가장 앞에 붙여야 Files\Google\Chrome\Application\chrome.exe 이 C:\Program 실행파일의 파라미터로 인식되지 않음
 --> 파이썬 내장 shlex.split()가 역슬래시를 다 지움 
'''

webbrowser.register(name=Chrome, klass=None, instance=webbrowser.BackgroundBrowser(Chrome))
webbrowser.get(Chrome).open_new(url)
