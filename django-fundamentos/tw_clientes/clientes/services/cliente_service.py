from ..models import Cliente
from django.db import connection

def listar_clientes():
    clientes = Cliente.objects.all()
    return clientes

def listar_cliente_id(id):
    cliente = Cliente.objects.get(id=id)
    return cliente

def remover_cliente(cliente):
    cliente.delete()

def cadastrar_cliente(cliente):
    Cliente.objects.create(nome=cliente.nome, sexo=cliente.sexo, data_nascimento=cliente.data_nascimento,
                           email=cliente.email, profissao=cliente.profissao)

def editar_cliente(cliente, cliente_novo):
    cliente.nome = cliente_novo.nome
    cliente.sexo = cliente_novo.sexo
    cliente.data_nascimento = cliente_novo.data_nascimento
    cliente.email = cliente_novo.email
    cliente.profissao = cliente_novo.profissao
    cliente.save(force_update=True)

   # with connection.cursor() as cursor:
    #    nome = "'Carlos', email= 'ana@mail.com'"
    #    cursor.execute("UPDATE clientes_cliente SET nome=%s WHERE id=4", [nome])