<template>
  <div>
    <div class="first__container">
      <d-button>click me</d-button>
      <d-button rounded>click me</d-button>
    </div>
    <div class="second__container">
      <ul class="list__container">
        <li class="list__item" v-for="(item, index) in propsItems" :key="index">
          <div class="item__content">
            <div class="item__text">
              <div class="text__label">Name</div>
              <span class="text__value props__name">{{ item.Name }}</span>
            </div>
            <div class="item__text">
              <div class="text__label">Type</div>
              <span class="text__value">{{ item.Type }}</span>
            </div>
            <div class="item__text">
              <div class="text__label">Default</div>
              <span class="text__value">{{ item.Default }}</span>
            </div>
          </div>
          <div class="item__description">
            <div class="item__text">
              <div class="text__label">Description</div>
              <span class="text__value">{{ item.Description }}</span>
            </div>
          </div>
          <hr class="list__hr" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import buttonJson from "../../assets/mocks/components/d/button.json";

export default {
  data() {
    return {
      propsItems: buttonJson.propsDoc
    };
  }
};
</script>

<style scoped lang="scss">
.first__container {
  width: 800px;
}
.second__container {
  .list__container {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 600px;
    overflow-y: scroll;
    border: solid 1px lightgray;
    .list__item {
      .item__content {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item__text {
          .text__label {
            font-size: 12px;
            color: #666666;
          }
          .text__value {
            font-size: 14px;
            font-weight: 700;
            &.props__name {
              color: #039be5;
            }
          }
        }
      }
      .item__description {
        padding: 10px 5px;
        .item__text {
          font-size: 12px;
          color: #000000;
          .text__label {
            color: #666666;
          }
          .text__value {
            font-size: 14px;
          }
        }
      }
      .list__hr {
        color: #eeeeee;
        border-width: 0.5px;
        margin: 0;
      }
    }
  }
}
</style>
