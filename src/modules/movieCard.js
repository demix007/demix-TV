const getMovieCard = (poster, title, id, likes) => `<div class="card">
                <img class="poster" src="${poster}" alt="Poster">
                <div class="card__header">
                    <p class="card__heading">${title}</p>
                    <i class="fa-solid fa-heart heart heart-uncheck" id="heart-${id}" onclick="likeitem(${id})"></i>
                    <p class="card__total-likes" id="likes-${id}">${likes}</p>
                </div>
                <div class="card__footer">
                    <div class="card__comment card-btn">Comments</div>
                    <div class="card__reservation card-btn">Reservations</div>
                </div>
            </div>`;

export default getMovieCard;