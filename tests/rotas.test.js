const { verificarMelhorRota, calcularDistancia } = require('../src/CódigoPai');

describe('Função calcularDistancia', () => {
    test('Deve retornar 0 para pontos idênticos', () => {
        expect(calcularDistancia({ latitude: 0, longitude: 0 }, { latitude: 0, longitude: 0 })).toBe(0);
    });

    test('Deve calcular corretamente a distância entre dois pontos diferentes', () => {
        expect(calcularDistancia({ latitude: 0, longitude: 0 }, { latitude: 3, longitude: 4 })).toBe(5);
    });

    test('Deve calcular corretamente a distância entre pontos negativos', () => {
        expect(calcularDistancia({ latitude: -1, longitude: -1 }, { latitude: 2, longitude: 3 })).toBe(5);
    });
});

describe('Função verificarMelhorRota', () => {
    test('Deve retornar a única rota disponível', () => {
        const pedidos = [{ endereco: { latitude: 1, longitude: 1 } }];
        const rotas = [{ latitude: 1, longitude: 1 }];
        expect(verificarMelhorRota(pedidos, rotas)).toEqual({ latitude: 1, longitude: 1 });
    });

    test('Deve retornar a rota com a menor distância (múltiplas rotas, um pedido)', () => {
        const pedidos = [{ endereco: { latitude: 1, longitude: 1 } }];
        const rotas = [{ latitude: 1, longitude: 1 }, { latitude: 2, longitude: 2 }];
        expect(verificarMelhorRota(pedidos, rotas)).toEqual({ latitude: 1, longitude: 1 });
    });

    test('Deve calcular corretamente a menor distância total (múltiplos pedidos e rotas)', () => {
        const pedidos = [
            { endereco: { latitude: 1, longitude: 1 } },
            { endereco: { latitude: 2, longitude: 2 } }
        ];
        const rotas = [
            { latitude: 1, longitude: 1 },
            { latitude: 3, longitude: 3 }
        ];
        expect(verificarMelhorRota(pedidos, rotas)).toEqual({ latitude: 1, longitude: 1 });
    });

    test('Deve retornar null quando não houver rotas', () => {
        const pedidos = [{ endereco: { latitude: 1, longitude: 1 } }];
        const rotas = [];
        expect(verificarMelhorRota(pedidos, rotas)).toBeNull();
    });

    test('Deve retornar a única rota disponível quando não houver pedidos', () => {
        const pedidos = [];
        const rotas = [{ latitude: 1, longitude: 1 }];
        expect(verificarMelhorRota(pedidos, rotas)).toEqual({ latitude: 1, longitude: 1 });
    });
});
