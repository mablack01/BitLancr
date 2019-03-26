# this file defines the models that we will be using in the schema
# for our database.  Changes in models should be made in their
# corresponding classes in this file



from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String 

Base = declarative_base()


# the 'users' table will inherit from the SQLAlchemy Base class
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True)
    email = Column(String(256))
    password = Column(String(256))
    handle = Column(String(256))
    role = Column(String(256))
    fname = Column(String(256))
    lname = Column(String(256))
    bio = Column(String(1024))
    website = Column(String(256))
    pic = Column(String(256))
    org = Column(String(256))
    accountlvl = Column(String(256))
    status = Column(String(256))

    def __repr__(self):
        return '<User(name = %s, handle = %s, id = %i, role = %s)>' %(self.fname + ' ' + self.lname, self.handle, self.id, self.role)





