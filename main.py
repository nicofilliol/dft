import eel
import fourier
import cmath

# Set web files folder
eel.init('web')


def load_path():
    sample_data = []
    for i in range(-2, 3):
        for t in range(0, 25):
            #sample_data.append(100*complex(cmath.cos(2*cmath.pi * t/100).real, cmath.sin(2*cmath.pi * t/100).real))
            sample_data.append(complex(i*100 + t*4, t*4))

        for t in range(0, 25):
            #sample_data.append(100*complex(cmath.cos(2*cmath.pi * t/100).real, cmath.sin(2*cmath.pi * t/100).real))
            sample_data.append(complex((i+1) * 100, 100-t*4))

    
    return sample_data



# sample_data = [100j, 100j, 100j, 100j, 100j, -100j, -100j, -100j, -100j, -100j]
coeff = fourier.discrete_fourier_transform(load_path())
#data = fourier.inverse_fourier_transform(coeff)

eel.draw_fourier_transform(coeff)

eel.start('index.html', mode='electron', cmdline_args=['electron'])



