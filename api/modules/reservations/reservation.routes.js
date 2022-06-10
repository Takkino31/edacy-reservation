import {findAllReservation,findOneReservation,insertOneReservation,deleteOneReservation} from "./reservation.controller.js"
function reservationRoutes (app)  {
    app.route('reservations')
        .get(findAllReservation)
        .post(insertOneReservation)
    app.route('reservations/:id')
        .get(findOneReservation)
        .delete(deleteOneReservation)
}

export {reservationRoutes}
