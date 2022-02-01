### Sql

Uma tabela é uma estrutura que vai guardar dados;
Nunca esquecer o **;** no final das querys;

**Alguns comandos Sqls**

```sql
SHOW DATABASE; -- Mostra os bancos que existem;
CREATE DATABASE (nome banco de dados);-- Cria um novo banco;
USE; -- Acessa uma tabela;
SHOW TABLES; -- Mostra as tabelas;
DESCRIBE; -- Mostra os dados da tabela;
```

**Exmplo de criação de tabela:**

```sql
CREATE TABLE usuarios(
  nome VARCHAR(255),
  email VARCHAR(100),
  idade INT
);
```

**Exmplo de inserção de dados na tabela usuarios:**

```sql
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Sávio Nascimento",
  "email.teste@gmai.com",
  20
);
```

**Exmplo de seleção de dados da tabela usuarios:**

```sql
-- * significa all (todos);
SELECT * FROM usuarios
```

**Exmplo de seleção especifica de dados da tabela usuarios:**

```sql
-- Utilizando WHERE para especificar;
SELECT * FROM usuarios WHERE idade = 20;
```

**Exmplo de exclusão de dados da tabela usuarios:**

```sql
-- Excluindo o usuario Felipe;
DELETE FROM usuarios WHERE nome = 'Felipe Costa'
```

---

### NUNCA USAR UM DELETE SEM WHERE!!

---

**Exmplo de edição(update) de dados da tabela usuarios:**

```sql
UPDATE usuarios SET idade = 20 WHERE nome = "Savio Nascimento"

```

---

### NUNCA USAR UM UPDATE SEM WHERE!!

---
