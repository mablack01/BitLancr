# This is a script to print out some very elementary statistics about our currently
# running database


# ------------------------------------------------------------
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData
from sqlalchemy import Table
from sqlalchemy import inspect

# create the engine base on which the ORM and Queries will run
engine = create_engine('postgresql://pi:1234count@bitlancr.ddns.net:5432/test')

# create the session factory
Session = sessionmaker(bind = engine)

# create the actual session object which will interface with the DB
# this is where the code actually connects to the DB
session = Session()

# create a MetaData object which will hold the general schema of our entire DB
metadata = MetaData()

# retrieve the scheme information from the DB
looker = inspect(engine)

# the 'tables' variable will hold a list of strings of tables in our DB
tables = looker.get_table_names()

print(" DB contains %i tables:" %len(tables))

for table in tables:
    print("")
    print(" --- Table: %s [%i rows] ---" %(table, session.query(table).count()) )

    # columns is a list of Python dictionaries representing each column
    columns = looker.get_columns(table)

    print("  -- %i total columns:" %len(columns))
    for column in columns:
          print("   - %s, type: %s, nullable: %s" %(column['name'], str(column['type']), str(column['nullable'])))

