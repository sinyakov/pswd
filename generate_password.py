from string import ascii_lowercase
from random import choice


def generate_password(length="12", withCapitalLetters=None, withNumbers=None, withSymbols=None, excludeSimilarCharacters=None):
    letters = set(ascii_lowercase)
    capital_letters = set(ascii_lowercase.upper()) if withCapitalLetters is not None else set()
    numbers = set(map(str, range(10))) if withNumbers is not None else set()
    symbols = set("!@#$%^&*()") if withSymbols is not None else set()
    similar_characters = set("iloILO10") if excludeSimilarCharacters is not None else set()

    allowed_characters = list((letters | capital_letters | numbers | symbols) - similar_characters)
    
    return "".join(choice(allowed_characters) for _ in range(int(length)))
