from PIL import Image

im = Image.open(r'c:\Users\bajar\hidayath projects\engineering construction website project\public\images\hero-reference-full.jpg')
w, h = im.size
print('Width:', w, 'Height:', h)

# Let's crop button 1 (START YOUR DREAM)
btn1 = im.crop((int(w*0.09), int(h*0.58), int(w*0.24), int(h*0.66)))
btn1.save(r'c:\Users\bajar\hidayath projects\engineering construction website project\public\images\debug_btn1.jpg')

# Let's crop button 2 (EXPLORE PROJECTS)
btn2 = im.crop((int(w*0.25), int(h*0.58), int(w*0.40), int(h*0.66)))
btn2.save(r'c:\Users\bajar\hidayath projects\engineering construction website project\public\images\debug_btn2.jpg')

print('Saved debug crops successfully')
