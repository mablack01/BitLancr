# this is a file to insert mock data presented in JSON
# files into our database

import models
import plac
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from pathlib import Path
import os
from os import listdir
from os.path import isfile, join




def check_schemas():
    return 1

# function that runs the database actions to be carried out
def run(jdir, check, dump, insert):

    # create the engine base on which the ORM and Queries will run
    engine = create_engine('postgresql://pi:1234count@bitlancr.ddns.net:5432/test')

    # create the session factory
    Session = sessionmaker(bind = engine)

    # create the actual session object which will interface with the DB
    # this is where the code actually connects to the DB
    session = Session()
    models.Base.metadata.create_all(engine)
    
    if dump:
        print('dumping...')
        dump_db()

    if check:
        print('checking to see if the data in the database matches JSON data')
        print('not yet implemented, now exiting...')
        exit()

    if insert:
        # if this session is not dumping the database, but we are also
        # inserting new data, it is important to check if the existing
        # table layout in the DB will accomodate the data we are trying
        # to insert.  
        if not dump:
            # if the new data will not work with the existing layout, or
            # if admin wants to just forget inserting this new data, this
            # function will exit the script
            check_schemas()
        print('inserting json at [%s]' %jdir)
        path = join(os.getcwd(),Path(jdir))
        onlyfiles = [join(path, f) for f in listdir(path) if (isfile(join(path, f)) and os.path.getsize(join(path, f)) > 0)]
        print(onlyfiles)

        for file in onlyfiles:
            with open(file) as f:
                data = json.load(f)
                fname = os.path.splitext(file)[0]
                fname = fname[fname.rfind('/') + 1:]
                print(fname)
                print(data[0])
                if fname == 'users':
                    print('ding')
                    # for each user data 'd' in the array of all users, 'data':
                    for d in data:
                        user = models.User(**d)
                        session.add(user)
                        session.flush()
















# the following lines are for program flag detection and starting options

def prompt_dump():
    s = input(' are you sure you want to dump the entire database? (y/n)')
    if s.lower() == 'y':
        return 1
    else:
        print(" 'y' was not entered, now exiting...")


def main(jdir: ('json dummy data directory, defaults to ../../dummydata/', 'option', 'j'),
         check: ('checks if the database is equivalent to JSON mock data', 'flag', 'c'), 
         dump: ('dumps the entire contents of our test database', 'flag', 'd'), 
         insert: ('inserts the data from JSON files to DB as new entries', 'flag', 'i')):

    if not jdir:
        jdir = '../../dummydata/'
    
    if check and dump and insert:
        print('no need to check database if it will be dumped')
        print('only dumping then inserting database...')
        if prompt_dump():
            run(jdir, check = False, dump = True, insert = True)
        else:
            # this exit() should never run since prompt_dump() will exit first
            exit()
    
    if check and dump:
        print('no need to check database if it will dumped')
        print('only dumping database...')
        if prompt_dump():
            run(jdir, check = False, dump = True, insert = False)
        else:
            exit()

    if check and insert:
        print('checking then inserting, though check might fail next time upon new data being added...')
        run(jdir, check = True, dump = False, insert = True)

    if check:
        print('checking database...')
        run(jdir, check = True, dump = False, insert = False)

    if dump and insert:
        print('dumping then reinserting database')
        if prompt_dump():
            run(jdir, check = False, dump = True, insert = True)
        else:
            exit()

    if dump:
        if prompt_dump():
            run(jdir, check = False, dump = True, insert = False)
        else:
            exit()

    if insert:
        print('added new entries to DB sourced from JSON data')
        run(jdir, check = False, dump = False, insert = True)

    print('no options given, now exiting...')
    exit()


# use plac module to pasre and pass stdin args
if __name__ == ('__main__'):
    import plac; plac.call(main)




