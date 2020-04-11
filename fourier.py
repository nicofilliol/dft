import cmath

def discrete_fourier_transform(data):
    N = len(data)

    coefficients = []

    for k in range(0, N):
        complex_sum = complex(0, 0)
        for n in range(0, N):
            complex_sum += data[n] * cmath.exp((-1j * 2 * cmath.pi / N) * k * n)


        coefficients.append({
            "coefficient" : {
                "real" : complex_sum.real,
                "imaginary" : complex_sum.imag
            },
            "amplitude" : abs(complex_sum),
            "phase" : cmath.phase(complex_sum),
            "frequency" : k
        })


    return coefficients


def inverse_fourier_transform(coefficients):
    if type(coefficients[0]) == dict:
        coefficients = [item["coefficient"]["real"] + 1j*item["coefficient"]["imaginary"] for item in coefficients]

    N = len(coefficients)

    data = []

    for n in range(0, N):
        complex_sum = complex(0,0)
        for k in range(0, N):
            complex_sum += coefficients[k] * cmath.exp(1j * 2 * cmath.pi * k * n / N)

        complex_sum = complex_sum / N
        data.append(complex_sum)

    return data
