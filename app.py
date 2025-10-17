from flask import Flask,request,jsonify
from flask_cors import CORS
from flask_sqlalchemy  import  SQLAlchemy
from flask_bcrypt import Bcrypt

app= Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    identificacion = db.Column(db.Integer, unique=True, nullable=False)
    correo = db.Column(db.String(80), unique=True, nullable=False)
    contraseña = db.Column(db.String(50), unique=True, nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    
with app.app_context():
    db.create_all()

#http://127.0.0.1:5000/registro    
@app.route('/registro', methods=['POST'])
def registro():
    data = request.get_json()
    
    hashed_contraseña = bcrypt.generate_password_hash(
        data['contraseña']
    ).decode('utf-8')
    
    nuevo_usuario = User(
        nombre=data['nombre'],
        identificacion=data['identificacion'],
        correo=data['correo'],
        contraseña=hashed_contraseña,
        edad=data['edad']
    )
    
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'message':'usuario registrado Exitosamente '}), 201

#http://127.0.0.1:5000/login  
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    correo = data.get("correo")
    contraseña = data.get("contraseña")
    
    user = User.query.filter_by(correo=correo).first()
    
    if user and bcrypt.check_password_hash(user.contraseña, contraseña):
        return jsonify({'message': 'Inicio de sesión exitoso',
                        'user':{'id':user.id,
                                'nombre':user.correo}}), 200
    else:
        return jsonify({'message': 'Correo o contraseña incorrectos'}), 401

#crud cliente 

    
if __name__ == '__main__':
    app.run(debug=True)