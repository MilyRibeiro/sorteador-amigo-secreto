import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = ['Ana', 'Paulo', 'João', 'Juliana', 'Vinicius', 'Natália'];
        const resultado = realizarSorteio(participantes);

        participantes.forEach(participante => {
            const amigoSecreto = resultado.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        });
    });
});