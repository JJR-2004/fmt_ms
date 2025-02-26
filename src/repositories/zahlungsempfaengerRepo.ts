import { AppDataSource } from "../database/data-source";
import { zahlungsempfaenger as zahlumgsempfaengerEntity } from "../entity/zahlungsempfaengerEntity";

const zahlungsempfaengerRepo = AppDataSource.getRepository(
    zahlumgsempfaengerEntity
);

export async function get() {
    return await zahlungsempfaengerRepo.find();
}

export async function insert(entry: zahlumgsempfaengerEntity) {
    return await zahlungsempfaengerRepo.save(entry);
}

export async function getEntrybyID(id: number) {
    return await zahlungsempfaengerRepo
        .createQueryBuilder("zahlungsempfaenger")
        .where("zahlungsempfaenger.ID_ZAHLUNGSEMPFAENGER = :id", { id: id })
        .getOne();
}

export async function getEntrybyIBAN(IBAN: string) {
    return await zahlungsempfaengerRepo
        .createQueryBuilder("zahlungsempfaenger")
        .where("zahlungsempfaenger.IBAN = :IBAN", { IBAN: IBAN })
        .getOne();
}
