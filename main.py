import eel
import pyautogui

largura_tela, altura_tela = pyautogui.size()

# Defina o diretório onde está o arquivo HTML
eel.init('./')

@eel.expose
def runPyCode(test):
    #print(getHtml(test))
    pass
@eel.expose
def hello():
    print("Testando !")

@eel.expose
def getHtml(html_file):
    html_file_path = html_file
    try:
        with open(html_file_path, 'r', encoding='utf-8') as html_file:
            html_text = html_file.read()
            return html_text
    except FileNotFoundError:
        print(f"The file '{html_file_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")


@eel.expose
def takeScreenShot():
    screenshot = pyautogui.screenshot()
    screenshot.save("ScreenShoots/screenshot.png")
    return "ScreenShoots/screenshot.png"

@eel.expose
def getScreenSize():
    return [largura_tela, altura_tela]

eel.start('./view/mainWindow.html', size=(largura_tela, altura_tela), mode='chrome', position=(0, 0))
