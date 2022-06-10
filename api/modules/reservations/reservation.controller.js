const Reservations = [
    {
        id: 1,
        clientId: 1,
        productId: 2,
        count: 2,
        amount: 100
    },
    {
        id: 2,
        clientId: 3,
        productId: 1,
        count: 1,
        amount: 50
    }
];
function findAllReservation() {
    return Reservations;
}

function findOneReservation(ReservationId) {
    return Reservations.find((resa) => resa.id == ReservationId);
}
function deleteOneReservation (ReservationId) {
    const index = Reservations.findIndex((resa) => resa.id == ReservationId);
    Reservations.splice(index, 1);
    return true;
}

function insertOneReservation (Reservation) {
    Reservations.push(Reservation);
}

export {findAllReservation,findOneReservation,deleteOneReservation,insertOneReservation}