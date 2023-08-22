CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


INSERT INTO usuarios(idade, nome, email) VALUES(
    8,
    "Carlos",
    "email@teste9675.com"
);

SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = "José Pedro";
SELECT * FROM usuarios WHERE idade >= 18;
DELETE FROM usuarios WHERE nome = "Carlos";
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Victo Lima";